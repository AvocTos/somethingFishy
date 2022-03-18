import React, { useState, Dispatch, SetStateAction } from "react";
import { SessionStateInterface, fishStateInterface, gameStateInterface, stateOptions, } from "./helpers/interfaces";

interface navbarProps {
  setFishState: Dispatch<SetStateAction<fishStateInterface>>;
  setGameState: Dispatch<SetStateAction<gameStateInterface>>;
  setSessionState: Dispatch<SetStateAction<SessionStateInterface>>;
}

const Navbar = (props: navbarProps) => {
  const onclick = () => {
    props.setFishState({ fishes: [] });
    props.setGameState({ state: stateOptions.noState });
    props.setSessionState({ game_session: false });
  };
  return (
    <>
      <nav className="app__nav">
        <button onClick={onclick} className="nav__back-btn">
          Go Back
        </button>
      </nav>
    </>
  );
};

export default Navbar;
