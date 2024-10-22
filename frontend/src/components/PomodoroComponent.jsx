import React, { useState, useEffect } from "react";

export const PomodoroComponent = () => {
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalRef;
    if (isRunning) {
      intervalRef = setInterval(() => {
        if (seconds === 0 && minutes === 0) {
          setIsRunning(false);
          return;
        } else if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        }
      }, 1000);
    }
    return () => clearInterval(intervalRef);
  }, [isRunning, seconds, minutes]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div>
      <div className="flex flex-col bg-orange-500 w-1/2 mx-auto mt-5 rounded-md items-center gap-9 p-5">
        <div className="flex justify-center gap-2">
          <div className="py-1 px-2 text-sm rounded-md cursor-pointer">
            Pomodoro
          </div>
          <div className="py-1 px-2 text-sm rounded-md cursor-pointer">
            Short Break
          </div>
          <div className="py-1 px-2 text-sm rounded-md bg-orange-400 cursor-pointer">
            Long Break
          </div>
        </div>
        <div className="text-9xl flex">
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
          {/* Display time in MM:SS */}
        </div>
        <button
          onClick={handleStartStop}
          className="rounded-md shadow-md p-3 w-32 text-lg font-bold bg-red-500"
        >
          {isRunning ? "PAUSE" : "START"}
        </button>
      </div>
    </div>
  );
};
