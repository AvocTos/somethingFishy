import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { SessionStateInterface, fishStateInterface, fish, gameStateInterface, stateOptions, } from "./helpers/interfaces";
import { createIds, initializeDecoy, declarePlayer, playingFishImgSrc, playingFishName, } from "./helpers/gameBoardHelpers";
import TasteButtons from "./TasteButtons";
import PlayAgainBtn from "./PlayAgainBtn";
import Loading from "./Loading";
import Header from "./Header";

interface GameBoardProps {
  setSessionState: Dispatch<SetStateAction<SessionStateInterface>>;
  setGameState: Dispatch<SetStateAction<gameStateInterface>>;
  setFishState: Dispatch<SetStateAction<fishStateInterface>>;
  FishState: fishStateInterface;
  GameState: gameStateInterface;
}

const GameBoard = (props: GameBoardProps) => {
  useEffect(() => {
    const getData = () => {
      fetch("/api/fish")
        .then((res) => res.json())
        .then((fishArray) => {
          createIds(fishArray);
          initializeDecoy(fishArray);
          declarePlayer(fishArray);
          props.setFishState({ fishes: fishArray });
          setTimeout(() => {
            props.setGameState({ state: stateOptions.playing });
          }, 200);
        });
    };
    getData();
  }, [props.GameState.state === stateOptions.prepareToPlay]);

  const visibilityToggle = () => {
    if (props.GameState.state === "won") {
      return "gameboard__fish-name--won";
    }
    return "";
  };

  if (props.GameState.state === stateOptions.prepareToPlay) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    const fishName = playingFishName(props.FishState.fishes);
    const fishImg = playingFishImgSrc(props.FishState.fishes);
    return (
      <>
        <Header />
        <img className="gameboard__img" src={fishImg}></img>
        <p className={"gameboard__fish-name " + visibilityToggle()}>
          Congratulations!<br></br>
          You found the {fishName}'s taste:
        </p>

        <section className="gameboard__btn-wrapper">
          {props.FishState.fishes.map((aFish: fish) => (
            <TasteButtons
              setSessionState={props.setSessionState}
              setGameState={props.setGameState}
              GameState={props.GameState}
              Fishes={props.FishState.fishes}
              aFish={aFish}
              key={aFish.id}
            />
          ))}
          <PlayAgainBtn
            setFishState={props.setFishState}
            setGameState={props.setGameState}
            GameState={props.GameState}
          />
        </section>
      </>
    );
  }
};

export default GameBoard;
