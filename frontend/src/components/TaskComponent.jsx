import React, { useEffect, useState } from "react";
import axios from "axios";
import NewTask from "./NewTask";
import { BACKEND_URL } from "../config";
import { TodoTask } from "./TodoTask";
import { TaskColumn } from "./TaskColumn";

export const TaskComponent = () => {
  const [newTaskClick, setNewTaskClick] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const onDrop = (status, position) => {
    console.log(
      `${activeCard} is going to be dropped at ${status} at the position ${position}`
    );
    if (activeCard === null || activeCard === undefined) return;
    const taskToMove = allTasks[activeCard];
    const updatedTasks = allTasks.filter((task, index) => index !== activeCard);
    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    });
    setAllTasks(updatedTasks);
  };
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
          <TaskColumn
            title={"To do"}
            tasks={allTasks}
            status={"todo"}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            title={"On Progress"}
            tasks={allTasks}
            status={"progress"}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            title={"Done"}
            tasks={allTasks}
            status={"done"}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
        </div>
      </div>
    </div>
  );
};
