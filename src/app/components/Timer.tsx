import { useTimer } from "react-timer-hook";
import { Game } from "../page";
import React from "react";

type Props = {
    expiryTimestamp: Date;
    setCurrentInterval: React.Dispatch<React.SetStateAction<number>>;
    currentInterval: number;
    gameSetup: Game
}

export default function Timer({ expiryTimestamp, setCurrentInterval, currentInterval, gameSetup } : Props) {
    const lengthOfPeriod : number = gameSetup.length * 60; 
    const time = new Date();
        time.setSeconds(time.getSeconds() + lengthOfPeriod);
    console.log(lengthOfPeriod)
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ autoStart: false, expiryTimestamp, onExpire: () => {
    setCurrentInterval(currentInterval + 1);
    restart(time)
 }
 });


  return (
    <div className="text-center">
      <p>Time remaining in period:</p>
      <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button className="bg-yellow-300 m-1 p-1 cursor-pointer" onClick={start}>Start</button>
      <button className="bg-yellow-300 m-1 p-1 cursor-pointer" onClick={pause}>Pause</button>
      <button className="bg-yellow-300 m-1 p-1 cursor-pointer" onClick={resume}>Resume</button>
    </div>
  );
}
