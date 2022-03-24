import React, { useState, Dispatch, SetStateAction } from "react";
import { SessionStateInterface, fish, gameStateInterface, stateOptions, } from "./helpers/interfaces";

interface TasteButtonsProps {
  setSessionState: Dispatch<SetStateAction<SessionStateInterface>>;
  setGameState: Dispatch<SetStateAction<gameStateInterface>>;
  GameState: gameStateInterface;
  Fishes: fish[];
  aFish: fish;
  key: string;
}

const TasteButtons = (props: TasteButtonsProps) => {
  const fishArray = props.Fishes;
  const currentFish = props.aFish;
  const fishIndex = fishArray.findIndex(
    (obj: fish) => obj.name === currentFish.name
  );
  const clickedFish = fishArray[fishIndex];

  const gameHandler = () => {
    if (!clickedFish.decoy) {
      props.setGameState({ state: stateOptions.won });
    }
    return undefined;
  };
  const disableOnWin = () => currentFish.decoy && props.GameState.state === "won";
  const decoyClass = currentFish.decoy.toString();
  return (
    <>
      <button
        onClick={gameHandler}
        className={
          "gameboard__taste-btn gameboard__taste-btn--fish-decoy-" + decoyClass
        }
        disabled={disableOnWin()}
      >
        {currentFish.taste}
      </button>
    </>
  );
};

export default TasteButtons;
