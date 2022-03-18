export interface SessionStateInterface {
    game_session: boolean,
  }
  export interface fishStateInterface {
    fishes: fish[],
  }
  export interface fish {
    img: string,
    name: string,
    taste: string,
    decoy: boolean,
    id: string,
  }
  export interface gameStateInterface {
    state: stateOptions,
  }
  export enum stateOptions {
    noState = "",
    prepareToPlay = "loading",
    playing = "playing",
    won = "won",
  }