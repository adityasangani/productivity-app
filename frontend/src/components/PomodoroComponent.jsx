import React, { useState, useEffect } from "react";
import SettingsMenu from "./SettingsMenu";
import { FaRegSave } from "react-icons/fa";

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
  const [counter, setCounter] = useState(1);
  const [timeCompleted, setTimeCompleted] = useState([]);
  const labels = ["STUDY", "GYM", "CODE", "MEDITATE"];
  const [selectedLabel, setSelectedLabel] = useState("STUDY");
  const [labelClick, setLabelClick] = useState(false);

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
          5173;
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        }
      }, 1000);
    }
    return () => clearInterval(intervalRef);
  }, [isRunning, seconds, minutes]);

  const increaseCounter = () => {
    if (selectedElement === "pomodoro") {
      setCounter(counter + 1);
      if (counter % 4 != 0) {
        setMinutes(shortBreak);
        setSeconds(0);
        setSelectedElement("shortbreak");
      } else {
        setMinutes(longBreak);
        setSeconds(0);
        setSelectedElement("longbreak");
      }
    } else if (selectedElement === "shortbreak") {
      setSelectedElement("pomodoro");
      setMinutes(pomodoroTimer);
      setSeconds(0);
    } else if (selectedElement === "longbreak") {
      setSelectedElement("pomodoro");
      setMinutes(pomodoroTimer);
      setSeconds(0);
    }
  };
  const handleReset = () => {
    if (
      confirm(
        "You will lose all your progress. Are you sure you want to reset?"
      )
    ) {
      setCounter(1);
      setMinutes(pomodoroTimer);
      setSeconds(0);
      setSelectedElement("pomodoro");
    }
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleLabelSelect = (label) => {
    setSelectedLabel(label);
    setLabelClick(false);
  };

  return (
    <div className="flex flex-col items-center ">
      {settingClick && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black opacity-50 z-10"></div>

          {/* Modal */}
          <div className="fixed inset-0 flex justify-center items-center z-20">
            <div className="w-1/2 md:ml-28">
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
          selectedElement === "pomodoro" && "bg-orange-100"
        } ${selectedElement === "shortbreak" && "bg-blue-300"} ${
          selectedElement === "longbreak" && "bg-purple-300"
        } max-w-3/4 lg:mx-auto mt-5 rounded-md items-center gap-12 p-5 transition duration-700 ease-in-out`}
      >
        <div className="flex justify-center gap-2">
          <div
            className={`py-1 px-2 text-sm rounded-md cursor-pointer hover:bg-opacity-85 transition duration-150 ease-in-out ${
              selectedElement === "pomodoro" && "bg-orange-300 bg-opacity-75"
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
            onClick={() => {}}
            className="py-1 px-2 text-lg rounded-md cursor-pointer "
          >
            <FaRegSave />
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
              class="size-5 hover:text-gray-600"
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
        <div className="text-8xl lg:text-9xl flex font-bold">
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
          {/* Display time in MM:SS */}
        </div>
        <div className="flex items-center justify-center mb-4 mr-10 ">
          <button
            className="rounded-md shadow-md lg:ml-6 p-3 w-20 text-md lg:w-32 lg:text-lg font-bold bg-red-500"
            onClick={() => setLabelClick(!labelClick)}
          >
            <div className="">{selectedLabel}</div>
          </button>
          {labelClick && (
            <ul className="absolute left-64 lg:ml-2 w-20 lg:w-32 top-80 text-sm mt-12 bg-white border rounded-md shadow-md z-10">
              {labels.map((label) => (
                <li
                  key={label}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    handleLabelSelect(label);
                  }}
                >
                  {label}
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={handleStartStop}
            className="rounded-md  shadow-md ml-6 p-3 w-20 text-md lg:w-32 lg:text-lg font-bold bg-red-500"
          >
            {isRunning ? "PAUSE" : "START"}
          </button>
          <button
            onClick={handleReset}
            className="rounded-md ml-8 shadow-md p-3 w-20 text-md lg:w-32 lg:text-lg font-bold bg-red-500"
          >
            RESET
          </button>
          <div
            className="relative left-4 cursor-pointer"
            onClick={increaseCounter}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-9 hover:text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-5 items-center gap-1">
        <div className="text-gray-400">
          #<span>{counter}</span>
        </div>
        <div>
          {selectedElement === "pomodoro"
            ? "Time to focus!"
            : "Time for a break!"}
        </div>
      </div>
    </div>
  );
};
