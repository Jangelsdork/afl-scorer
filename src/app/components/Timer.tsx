import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import { Game } from "../page";

type Props = {
    expiryTimestamp: Date;
    setCurrentInterval: React.Dispatch<React.SetStateAction<number>>;
    currentInterval: number;
    gameSetup: Game
    setSecondsLeft : React.Dispatch<React.SetStateAction<number>>
}

export default function Timer({ expiryTimestamp, setCurrentInterval, setSecondsLeft, currentInterval, gameSetup } : Props) {
    const [hasStarted, setHasStarted] = useState<boolean>(false)
    const lengthOfPeriod : number = gameSetup.length * 60; 
    const time = new Date();
        time.setSeconds(time.getSeconds() + lengthOfPeriod);
  const {
    totalSeconds,
    seconds,
    minutes,
    // hours,
    // days,
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
 setSecondsLeft(totalSeconds)



 // Hides start button when timer is running. Important to prevent bug when "Start" is used rather than "Pause"
 function StartButton() : JSX.Element {
  if(!hasStarted){
    return <button 
    className="bg-indigo-600 m-1 p-2 cursor-pointer rounded-3xl	" 
    onClick={()=>{
      start();
      setHasStarted(true)
    }}>
      Start
      </button>
  }
  <div></div>
 }

  return (
    <div className="text-center">
      <p>Time remaining in quarter:</p>
      <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <StartButton />
      <button className="bg-indigo-600 m-1 p-2 cursor-pointer rounded-3xl	" onClick={pause}>Pause</button>
      <button className="bg-indigo-600 m-1 p-2 cursor-pointer rounded-3xl	" onClick={resume}>Resume</button>
    </div>
  );
}
