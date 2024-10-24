import React, { useState, useEffect } from "react";
import SettingsMenu from "./SettingsMenu";

export const PomodoroComponent = () => {
  const [pomodoroTimer, setPomodoroTimer] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(pomodoroTimer);
  const [settingClick, setSettingClick] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  let selectedElementIDs = ["pomodoro", "shortbreak", "longbreak"];
  const [selectedElement, setSelectedElement] = useState("pomodoro");

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
    <div className="flex flex-col items-center">
      {settingClick && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black opacity-50 z-10"></div>

          {/* Modal */}
          <div className="fixed inset-0 flex justify-center items-center z-20">
            <div className="w-1/2 ml-28">
              <SettingsMenu
                settingClick={settingClick}
                setSettingClick={setSettingClick}
                pomodoroTimer={pomodoroTimer}
                setPomodoroTimer={setPomodoroTimer}
                shortBreak={shortBreak}
                setShortBreak={setShortBreak}
                longBreak={longBreak}
                setLongBreak={setLongBreak}
                seconds={seconds}
                setSeconds={setSeconds}
                minutes={minutes}
                setMinutes={setMinutes}
              />
            </div>
          </div>
        </>
      )}
      <div
        className={`flex flex-col ${
          selectedElement === "pomodoro" && "bg-yellow-300"
        } ${selectedElement === "shortbreak" && "bg-blue-300"} ${
          selectedElement === "longbreak" && "bg-purple-300"
        } w-1/2 mx-auto mt-5 rounded-md items-center gap-9 p-5 transition duration-700 ease-in-out`}
      >
        <div className="flex justify-center gap-2">
          <div
            className={`py-1 px-2 text-sm rounded-md cursor-pointer hover:bg-opacity-85 transition duration-150 ease-in-out ${
              selectedElement === "pomodoro" && "bg-yellow-500 bg-opacity-75"
            }`}
            onClick={() => {
              setMinutes(pomodoroTimer);
              setSeconds(0);
              setSelectedElement("pomodoro");
            }}
          >
            Pomodoro
          </div>
          <div
            className={`py-1 px-2 text-sm rounded-md hover:bg-opacity-85 transition duration-150 ease-in-out cursor-pointer ${
              selectedElement === "shortbreak" && "bg-blue-500 bg-opacity-75"
            }`}
            onClick={() => {
              setSelectedElement("shortbreak");
              setMinutes(shortBreak);
              setSeconds(0);
            }}
          >
            Short Break
          </div>
          <div
            className={`py-1 px-2 text-sm rounded-md hover:bg-opacity-85 transition duration-150 ease-in-out cursor-pointer ${
              selectedElement === "longbreak" && "bg-purple-500 bg-opacity-75"
            }`}
            onClick={() => {
              setSelectedElement("longbreak");
              setMinutes(longBreak);
              setSeconds(0);
            }}
          >
            Long Break
          </div>
          <div
            onClick={() => setSettingClick(true)}
            className="ml-16 py-1 px-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
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
      <div>hi</div>
    </div>
  );
};
