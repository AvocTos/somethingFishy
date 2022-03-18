import React, { useState } from "react";
import {
  SessionStateInterface,
  fishStateInterface,
  gameStateInterface,
  stateOptions,
} from "./helpers/interfaces";
import LandingPage from "./LandingPage";
import GameBoard from "./GameBoard";
import Navbar from "./Navbar";

const App = () => {
  const [SessionState, setSessionState] = useState<SessionStateInterface>({
    game_session: false,
  });
  const [FishState, setFishState] = useState<fishStateInterface>({
    fishes: [],
  });
  const [GameState, setGameState] = useState<gameStateInterface>({
    state: stateOptions.noState,
  });

  const gameSessionToggle = () => {
    if (SessionState.game_session === true) {
      return (
        <>
          <Navbar
            setFishState={setFishState}
            setGameState={setGameState}
            setSessionState={setSessionState}
          />
          <GameBoard
            FishState={FishState}
            GameState={GameState}
            setSessionState={setSessionState}
            setGameState={setGameState}
            setFishState={setFishState}
          />
        </>
      );
    }
    if (SessionState.game_session === false) {
      return (
        <>
          <LandingPage
            setSessionState={setSessionState}
            setGameState={setGameState}
          />
        </>
      );
    } else {
      return (
        <>
          <h1>Internal server Error, Please refresh page</h1>
        </>
      );
    }
  };

  return (
    <>
      <div className="app">
        <main className="app__main">{gameSessionToggle()}</main>
        <footer className="app__footer">
          <p className="app__footer-text">&copy; 2022 by Sandra Jonsson</p>
        </footer>
      </div>
    </>
  );
};

export default App;
