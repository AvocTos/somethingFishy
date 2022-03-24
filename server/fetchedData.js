import fetchData from "node-fetch";

const dataModifier = (fishData) => {
    let modifiedData = [];
    for (let i = 0; i < fishData.length; i++) {
        const result = {
        img: fishData[i]["Species Illustration Photo"]["src"],
        name: fishData[i]["Species Name"],
        taste: fishData[i]["Taste"] ? fishData[i]["Taste"] : "no-taste"
    }
    modifiedData.push(result);
    }
    return modifiedData
}

const threeRandomNumbers = () => {
    const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const max = 114;
    const min = 0;
    let result = [];
    for (let i = 0; i < 3; i++) {
        result.push(generateRandomNumber(min, max));
    }
    return result;
}

const getThreeRandomFish = (modifiedFishArr) => {
    let result = [];
    const randomNumbers = threeRandomNumbers();
    for (let i = 0; i < 3; i++) {
        const randomlySelectedFish = modifiedFishArr[randomNumbers[i]];
        if(!randomlySelectedFish.taste) {
            randomlySelectedFish.taste = "mild taste";
        }
        result.push(randomlySelectedFish);
    }
    return result;
}

const fishTasteModifier = (taste, name) => {
    const nameForSearch = name.replace(/ /gm, "|")
    const nameRegex = new RegExp(nameForSearch, "gmi");
    return taste
    .replace(/(?<=<).*?(?=>)/gm, "")
    .replace(/<|>/gm, "")
    .replace(/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/ig, " ")
    .replace(nameRegex, "-")
}

const modifyFishTaste = (threeRandomFish) => {
    for (let i = 0; i < threeRandomFish.length; i++) {
        const taste = threeRandomFish[i].taste;
        const name = threeRandomFish[i].name;
        const modifiedTaste = fishTasteModifier(taste, name);
        threeRandomFish[i].taste = modifiedTaste;
    }
    return threeRandomFish;
}

const AllFishFromAPI = async (res) => {
    const searchTerm = `https://www.fishwatch.gov/api/species`;
    try {
        await fetchData(searchTerm)
        .then(response => response.json())
        .then((fetchedFish) => dataModifier(fetchedFish))
        .then((modifiedData) => getThreeRandomFish(modifiedData))
        .then((threeRandomFish) => modifyFishTaste(threeRandomFish))
        .then((threePlayableRandomFish) => {
            res.json(threePlayableRandomFish)
        });
    } catch (error) {
        console.log('went to error fetching fish')
        res.status(500);
        return res.send({ message: error.toString() });
    }
}

export default AllFishFromAPI;
  