import { useTimer } from "react-timer-hook";

type Props = {
    expiryTimestamp: Date;
    setCurrentInterval: React.Dispatch<React.SetStateAction<number>>;
    currentInterval: Number
}

export default function Timer({ expiryTimestamp, setCurrentInterval, currentInterval } : Props) {
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
  } = useTimer({ autoStart: false, expiryTimestamp, onExpire: () => setCurrentInterval(currentInterval+1) });


  return (
    <div style={{textAlign: 'center'}}>
      {/* <h1>react-timer-hook </h1> */}
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
