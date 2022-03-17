import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { stateInterface, fish } from './App'
import TasteButtons from './TasteButtons';
import {v4 as uuidv4} from 'uuid';

interface props {
    setState: Dispatch<SetStateAction<stateInterface>>,
    State: stateInterface,
}

const GameBoard = (props: props) => {
//   const initFish = [
//       { img:"", name:"", taste:"", decoy:true, id:"1" },
//       { img:"", name:"", taste:"", decoy:true, id:"2" },
//       { img:"", name:"", taste:"", decoy:true, id:"3" }
//     ]

//   const [Fishes, setFishes] = useState<fish[]>(initFish);

  const createIds = (fishArray: [fish,fish,fish]) => {
    const generateId = () => uuidv4();
    fishArray.map((aFish: fish) => {
        aFish.id = generateId();
    });
  }
  const initializeDecoy = (fishArray: [fish,fish,fish]) => {
    fishArray.map((aFish: fish) => {
        aFish.decoy = true;
    });
  }
  const declarePlayer = (fishArray: [fish,fish,fish]) => {
    const generateRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
    const randomIndex = generateRandomNumber(0, 3);
    fishArray[randomIndex].decoy = false;
  }

  const getData = () => {
    fetch('/api/fish')
      .then((res) => res.json())
      .then((fishArray) => {
        createIds(fishArray)
        initializeDecoy(fishArray)
        declarePlayer(fishArray)
        const newState = {
            game_session: true,
            fishes: fishArray,
        }
        props.setState(newState)
      })
    }

const playFish = props.State ? console.log(props.State) : "nono";

  useEffect(() => {
    getData()
  }, [])

    return (
        <>
          <h2>GameBoard</h2>
          <p>something Fishy</p>
          <img src=""></img>
          {props.State.fishes.map((aFish: fish) => (
            <TasteButtons Fishes={props.State.fishes} aFish={ aFish } key={ aFish.id } />
          ))}
        </>
      )
}

export default GameBoard;