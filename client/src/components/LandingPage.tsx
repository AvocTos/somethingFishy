import React, { useState, Dispatch, SetStateAction } from "react";
import { SessionStateInterface, gameStateInterface, stateOptions, } from "./helpers/interfaces";
import Header from "./Header";

interface LandingPageProps {
  setSessionState: Dispatch<SetStateAction<SessionStateInterface>>;
  setGameState: Dispatch<SetStateAction<gameStateInterface>>;
}

const LandingPage = (props: LandingPageProps) => {
  const prepareGameSession = () => {
    props.setSessionState({ game_session: true });
    props.setGameState({ state: stateOptions.prepareToPlay });
    return undefined;
  };

  return (
    <>
      <nav className="app__nav"></nav>
      <Header />
      <section className="landing-page__btn-wrapper">
        <button onClick={prepareGameSession} className="landing-page__play-btn">
          Go Play!
        </button>
      </section>
    </>
  );
};

export default LandingPage;
