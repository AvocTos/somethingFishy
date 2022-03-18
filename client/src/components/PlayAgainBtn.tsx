import React, { useState, Dispatch, SetStateAction } from "react";
import { fishStateInterface, gameStateInterface, stateOptions, } from "./helpers/interfaces";

interface playAgainBtnProps {
  setFishState: Dispatch<SetStateAction<fishStateInterface>>;
  setGameState: Dispatch<SetStateAction<gameStateInterface>>;
  GameState: gameStateInterface;
}

const TasteButtons = (props: playAgainBtnProps) => {
  const prepareNewGame = () => {
    props.setFishState({ fishes: [] });
    props.setGameState({ state: stateOptions.prepareToPlay });
  };
  const visibilityToggle = () => {
    if (props.GameState.state === "won") {
      return "gameboard__play-again-btn--won";
    }
    return "";
  };
  return (
    <>
      <button
        onClick={prepareNewGame}
        className={"gameboard__play-again-btn " + visibilityToggle()}
      >
        Play Again
      </button>
    </>
  );
};

export default TasteButtons;
