import fetchData from "node-fetch";

const dataModifier = (fishData) => {
    let modifiedData = [];
    for (let i = 0; i < fishData.length; i++) {
        const result = {
        img: fishData[i]["Species Illustration Photo"]["src"],
        name: fishData[i]["Species Name"],
        taste: fishData[i]["Taste"]
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
        result.push(randomlySelectedFish);
    }
    return result;
}

const AllFishFromAPI = async (res) => {
    const searchTerm = `https://www.fishwatch.gov/api/species`;
    await fetchData(searchTerm)
    .then(response => response.json())
    .then((fetchedFish) => dataModifier(fetchedFish))
    .then((modifiedData) => getThreeRandomFish(modifiedData))
    .then((threeRandomFish) => {
        res.status(200)
           .setHeader('Content-Type', 'application/json')
           .json(threeRandomFish);
    });
}

export default AllFishFromAPI;
  