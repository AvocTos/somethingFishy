import { SessionStateInterface, fishStateInterface, fish } from './interfaces'
import {v4 as uuidv4} from 'uuid';

export const createIds = (fishArray: [fish,fish,fish]) => {
    const generateId = () => uuidv4();
    fishArray.map((aFish: fish) => {
        aFish.id = generateId();
    });
  }
  export const initializeDecoy = (fishArray: [fish,fish,fish]) => {
    fishArray.map((aFish: fish) => {
        aFish.decoy = true;
    });
  }
  export const declarePlayer = (fishArray: [fish,fish,fish]) => {
    const generateRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
    const randomIndex = generateRandomNumber(0, 3);
    fishArray[randomIndex].decoy = false;
  }
  export const playingFishImgSrc = (fishArray: fish[]) => {
    const fishIndex = fishArray.findIndex((obj: fish) => obj.decoy === false);
    const playingFish = fishArray[fishIndex];
    return playingFish.img;
  }

  export const playingFishName = (fishArray: fish[]) => {
    const fishIndex = fishArray.findIndex((obj: fish) => obj.decoy === false);
    const playingFish = fishArray[fishIndex];
    return playingFish.name;
  }
