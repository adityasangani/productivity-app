import React, { useState } from "react";
import NewTask from "./NewTask";
import { taskAtom, userAtom } from "../store/atoms/atoms";
import { useRecoilValue } from "recoil";

export const TaskComponent = () => {
  const task = useRecoilValue(taskAtom);
  const [newTaskClick, setNewTaskClick] = useState(false);
  return (
    <div>
      <button
        className=" rounded-md text-sm bg-slate-800 text-white hover:bg-slate-700 border-black p-2"
        onClick={() => {
          setNewTaskClick(true);
        }}
      >
        New Task
      </button>
      {newTaskClick && (
        <div className="flex justify-center">
          <NewTask
            setNewTaskClick={setNewTaskClick}
            newTaskClick={newTaskClick}
          />{" "}
        </div>
      )}
    </div>
  );
};
