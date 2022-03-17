import React, { useState} from 'react';
import LandingPage from './LandingPage';
import GameBoard from './GameBoard';

export interface stateInterface {
  game_session: boolean,
  fishes: fish[],
}

export interface fish {
  img: string,
  name: string,
  taste: string,
  decoy: boolean,
  id: string,
}

const App = () => {
  const [State, setState] = useState<stateInterface>({game_session: true, fishes: []})
  const isPlaying = State.game_session;
  
  const gameSessionToggle = () => {
      if(isPlaying){
        return (
            <>
            <GameBoard State={ State } setState={ setState } />
            </>
        )
    } else {
        return (
            <>
              <LandingPage setState={ setState } />
            </>
          )
    }
  }

  return (
    <>
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        {gameSessionToggle()}
      </main>
      <footer>
      </footer>
    </div>
    </>
  );
}

export default App;
