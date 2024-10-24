import React, { useState } from "react";

const SettingsMenu = ({
  settingClick,
  setSettingClick,
  pomodoroTimer,
  setPomodoroTimer,
  shortBreak,
  setShortBreak,
  longBreak,
  setLongBreak,
  seconds,
  setSeconds,
  minutes,
  setMinutes,
}) => {
  return (
    <>
      <div className="w-3/4 bg-white rounded-t-sm flex flex-col p-6">
        <div className="flex justify-center">
          <label htmlFor="" className="text-md mb-2">
            SETTING
          </label>
          <div
            className="relative bottom-1 left-56 cursor-pointer hover:text-gray-500"
            onClick={() => setSettingClick(!settingClick)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="font-bold">Time (minutes)</div>
        <div className="flex justify-between mt-2 mb-5">
          <div className="flex flex-col">
            <div className="text-sm">Pomodoro</div>
            <input
              type="number"
              className="border w-4/5 mt-1 p-1 rounded-md bg-gray-100 outline-none"
              defaultValue={pomodoroTimer}
              onChange={(e) => {
                setPomodoroTimer(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="text-sm">Short Break</div>
            <input
              type="number"
              className="border w-4/5 mt-1 p-1 rounded-md bg-gray-100 outline-none"
              defaultValue={shortBreak}
              onChange={(e) => {
                setShortBreak(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="text-sm">Long Break</div>
            <input
              type="number"
              className="border w-4/5 mt-1 p-1 rounded-md bg-gray-100 outline-none"
              defaultValue={longBreak}
              onChange={(e) => {
                setLongBreak(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-3/4 h-16 rounded-b-sm bg-gray-200">
        <button
          className=" bg-slate-900 text-white text-sm w-4/12 rounded-md h-3/5"
          onClick={() => {
            setSeconds(0);
            setMinutes(pomodoroTimer);
            setSettingClick(!settingClick);
          }}
        >
          SAVE
        </button>
      </div>
    </>
  );
};

export default SettingsMenu;
