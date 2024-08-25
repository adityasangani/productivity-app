import React, { useState } from "react";
import Switcher1 from "./Switcher1";
import { taskAtom, userAtom } from "../store/atoms/atoms";
import { useRecoilState } from "recoil";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { BACKEND_URL } from "../config";

const NewTask = ({ newTaskClick, setNewTaskClick, onAddTask }) => {
  const [descriptionClick, setDescriptionClick] = useState(false);
  const [toggleClick, setToggleClick] = useState(false);
  const [labelClick, setLabelClick] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("Choose Label");
  const token = Cookies.get("token");
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;

  const handleLabelSelect = (label) => {
    setSelectedLabel(label);
    setTask({
      ...task,
      label: label,
    });
    setLabelClick(false);
  };

  const labels = ["Study", "Gym", "Code", "Meditate"];
  const [task, setTask] = useRecoilState(taskAtom);

  async function sendTaskBackend() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/tasks/create`,
        task,
        {
          withCredentials: true,
        }
      );
      onAddTask(response.data.task);
    } catch (error) {
      console.error("Unable to send task to backend, error:  ", error);
    }
  }

  return (
    <div className="w-3/4 bg-white rounded-sm flex flex-col p-6">
      <div className="flex justify-between">
        <label htmlFor="" className="text-xs mb-2">
          TITLE
        </label>
        <div
          className="relative bottom-4 left-4 cursor-pointer hover:text-gray-500"
          onClick={() => setNewTaskClick(!newTaskClick)}
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

      <div className="flex shadow-sm border rounded-sm">
        <input
          type="text"
          onChange={(e) => {
            setTask({
              ...task,
              title: e.target.value,
            });
          }}
          className="w-full h-11 p-2 outline-0 text-sm"
        />
        <div className="flex items-center h-11 bg-white p-2">
          <div className="relative flex justify-center items-center md:w-36 md:h-8 border-2 border-descriptionBlue text-sm rounded-sm cursor-pointer">
            <div
              onClick={() => setDescriptionClick(!descriptionClick)}
              className="text-descriptionBlue text-sm"
            >
              + Add description
            </div>
          </div>
        </div>
      </div>

      {descriptionClick && (
        <div className="mt-5 flex flex-col">
          <label htmlFor="" className="text-xs mb-2">
            DESCRIPTION
          </label>
          <div className="flex shadow-sm border rounded-sm">
            <input
              type="text"
              onChange={(e) => {
                setTask({
                  ...task,
                  description: e.target.value,
                });
              }}
              className="w-full h-11 p-2 outline-0 text-sm"
            />
          </div>
        </div>
      )}

      <div className="flex mt-5">
        <div className="text-xs ">SET TIMER</div>
        <div className="ml-4">
          <Switcher1
            toggleClick={toggleClick}
            setToggleClick={setToggleClick}
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col">
        <div className="text-xs">SELECT LABEL</div>
        <div className="relative">
          <div
            className="flex justify-center w-full mt-2 border bg-slate-800 h-10 items-center rounded-md cursor-pointer hover:bg-slate-700 transition-transform duration-150 transform active:scale-95 active:shadow-inner"
            onClick={() => setLabelClick(!labelClick)}
          >
            <div className="text-sm text-white">{selectedLabel}</div>
          </div>
          {labelClick && (
            <ul className="absolute w-full mt-2 bg-white border rounded-md shadow-md z-10">
              {labels.map((label) => (
                <li
                  key={label}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleLabelSelect(label)}
                >
                  {label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div
        onClick={() => {
          setNewTaskClick(!newTaskClick);
          setTask({
            ...task,
            userId: userId,
          });
          sendTaskBackend();
        }}
        className="flex justify-center w-full mt-2 border bg-leftNavCompSelect h-10 items-center rounded-md cursor-pointer hover:bg-leftNavCompSelectLight transition-transform duration-150 transform active:scale-95 active:shadow-inner"
      >
        <div className="text-sm text-white">Create Task</div>
      </div>
    </div>
  );
};

export default NewTask;
