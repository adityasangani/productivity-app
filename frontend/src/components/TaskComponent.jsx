import React, { useEffect, useState } from "react";
import axios from "axios";
import NewTask from "./NewTask";
import { taskAtom, userAtom } from "../store/atoms/atoms";
import { useRecoilValue } from "recoil";
import { BACKEND_URL } from "../config";

export const TaskComponent = () => {
  // const task = useRecoilValue(taskAtom);
  const [newTaskClick, setNewTaskClick] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/user/tasks`, {
          withCredentials: true,
        });
        setAllTasks(response.data.tasks);
      } catch (error) {
        console.error("Error fetching tasks: ", error);
      }
    };
    fetchTasks();
  }, []);

  const handleAddTask = (newTask) => {
    setAllTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <button
        className="rounded-md text-sm bg-slate-800 text-white hover:bg-slate-700 border-black p-2"
        onClick={() => {
          setNewTaskClick(true);
        }}
      >
        New Task
      </button>

      {newTaskClick && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black opacity-50 z-10"></div>

          {/* Modal */}
          <div className="fixed inset-0 flex justify-center items-center z-20">
            <div className="w-1/2 ml-28">
              <NewTask
                setNewTaskClick={setNewTaskClick}
                newTaskClick={newTaskClick}
                onAddTask={handleAddTask}
              />
            </div>
          </div>
        </>
      )}
      <div className="mt-10">
        <div className="grid grid-cols-3">
          <div className="flex mx-2 rounded-md p-3 border-2 flex-col">
            <div className="text-sm">To do</div>

            <div className="flex flex-col gap-5">
              {allTasks.map((task) => (
                <div className="w-60 border-2 flex flex-col" key={task.id}>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <p>{task.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex mx-2 rounded-md p-3 border-2 flex-col">
            <div className="text-sm">On Progress</div>
          </div>
          <div className="flex mx-2 rounded-md p-3 border-2 flex-col">
            <div className="text-sm">Done</div>
          </div>
        </div>
      </div>
    </div>
  );
};
