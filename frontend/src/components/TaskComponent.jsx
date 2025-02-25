import React, { useEffect, useState } from "react";
import axios from "axios";
import NewTask from "./NewTask";
import { BACKEND_URL } from "../config";
import { TaskColumn } from "./TaskColumn";

export const TaskComponent = () => {
  const [newTaskClick, setNewTaskClick] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  const onDrop = async (status, position) => {
    if (activeCard === null || activeCard === undefined) return;
    const taskToMove = allTasks[activeCard];
    const updatedTasks = allTasks.filter((_, index) => index !== activeCard);
    updatedTasks.splice(position, 0, { ...taskToMove, status });

    setAllTasks(updatedTasks);
    await axios.put(
      `${BACKEND_URL}/api/v1/user/tasks/${taskToMove.id}`,
      { status },
      { withCredentials: true }
    );
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
    <div className="p-4">
      {/* New Task Button */}
      <button
        className="rounded-md text-sm bg-slate-800 text-white hover:bg-slate-700 border-black p-2"
        onClick={() => setNewTaskClick(true)}
      >
        New Task
      </button>

      {/* Modal Overlay */}
      {newTaskClick && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
          <div className="fixed inset-0 flex justify-center items-center z-20">
            <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 px-4">
              <NewTask
                setNewTaskClick={setNewTaskClick}
                newTaskClick={newTaskClick}
                onAddTask={handleAddTask}
              />
            </div>
          </div>
        </>
      )}

      {/* Task Columns */}
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <TaskColumn
            title="To do"
            tasks={allTasks}
            status="todo"
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            title="In Progress"
            tasks={allTasks}
            status="progress"
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
          <TaskColumn
            title="Done"
            tasks={allTasks}
            status="done"
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
        </div>
      </div>
    </div>
  );
};
