import { useEffect, useRef, useState } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const interval = useRef(null);

  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval.current);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };

  const handleAdd = () => {
    setTimeLeft((prevTime) => prevTime + 5 * 60);
  };

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div id="timer-container">
      <h1>{formatTime()}</h1>
      {/* <div id="break-container">
        <p>Break Length</p>
        <button>+</button>
        <button>5 min/s</button>
        <button>-</button>
      </div>
      <div id="session-container">
        <p>Session Length </p>
        <button>+</button>
        <button onClick={handleAdd}>Add 5 mins</button>
        <button>-</button>
      </div> */}
      <div id="btn-container">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
export default Timer;
