import React, { useState, useEffect } from 'react'
import { stateInterface, fish } from './App'

interface TasteButtonsProps {
    Fishes: fish[],
    aFish: fish,
    key: string,
}

const TasteButtons = (props: TasteButtonsProps) => {
  const fishArray = props.Fishes;
  const currentFish = props.aFish;
  const fishIndex = fishArray.findIndex((obj: fish) => obj.name === currentFish.name);
  const clickedFish = fishArray[fishIndex];

  const onclick = () => {
      if(clickedFish.decoy) {
        console.log('you clicked a decoy!')
      } else {
        console.log('you clicked the right fish!')
        // update state to 
      }
    return undefined;
  }

  const decoyClass = currentFish.decoy.toString();

  if(currentFish.decoy) {
    return (
        <>
        <button onClick={onclick} className={"fish-decoy-" + decoyClass}>{currentFish.taste}</button>
        </>
    )
  } else {
    return (
        <>
        <button onClick={onclick} className={"fish-decoy-" + decoyClass}>{currentFish.taste}</button>
        </>
    )
  }
}

export default TasteButtons;