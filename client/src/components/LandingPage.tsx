import React, { useState, Dispatch, SetStateAction } from 'react';
import { stateInterface } from './App'

interface props {
    setState: Dispatch<SetStateAction<stateInterface>>,
}

const LandingPage = ( setState: props) => {
        return (
            <>
              <h2>Landing Page</h2>
              <button>Go Play!</button>
            </>
          )
}

export default LandingPage;