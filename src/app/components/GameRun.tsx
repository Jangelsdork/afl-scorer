import React, { ReactNode } from 'react'
import { Game } from '../page'
import Timer from './Timer'



type Props = {
    gameSetup: Game;
    setCurrentInterval: React.Dispatch<React.SetStateAction<number>>;
    currentInterval: Number
}

const GameRun = ({gameSetup, setCurrentInterval, currentInterval}: Props) => {
    if(gameSetup){
      const lengthOfPeriod = gameSetup.length * 60;
      const time = new Date();
      time.setSeconds(time.getSeconds() + lengthOfPeriod);
      console.log(gameSetup)
    

    return (
    <div>
        <h1 className='text-center font-medium text-lg'>Q{currentInterval}</h1>
        <Timer expiryTimestamp={time} setCurrentInterval={setCurrentInterval} currentInterval={currentInterval}/>
    </div>
  )
    }
}

export default GameRun