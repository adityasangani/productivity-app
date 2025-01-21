import React, { useEffect, useState } from "react";
import { TodoTask } from "./TodoTask";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const DFC1 = () => {
  const [allTasks, setAllTasks] = useState([]);
  const setActiveCard = true;
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
  }, [allTasks]);
  const pendingTasks = allTasks.filter((task) => task.status === "todo");
  const inProgressTasks = allTasks.filter((task) => task.status === "progress");
  const completedTasks = allTasks.filter((task) => task.status === "done");
  return (
    <>
      <div className="p-5">
        {/* Pending Tasks */}
        <div>
          <h2 className="text-lg font-bold mb-3">Pending Tasks:</h2>
          <div className="grid grid-cols-3 gap-4">
            {pendingTasks.map((task, index) => (
              <TodoTask
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                label={task.label}
                index={index}
                setActiveCard={() => {}}
                status={task.status}
              />
            ))}
          </div>
        </div>

        {/* Tasks in Progress */}
        <div className="mt-10">
          <h2 className="text-lg font-bold mb-3">Tasks in Progress:</h2>
          <div className="grid grid-cols-3 gap-4">
            {inProgressTasks.map((task, index) => (
              <TodoTask
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                label={task.label}
                index={index}
                setActiveCard={() => {}}
                status={task.status}
              />
            ))}
          </div>
        </div>

        {/* Completed Tasks */}
        <div className="mt-10">
          <h2 className="text-lg font-bold mb-3">Completed Tasks:</h2>
          <div className="grid grid-cols-3 gap-4">
            {completedTasks.map((task, index) => (
              <TodoTask
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                label={task.label}
                index={index}
                setActiveCard={() => {}}
                status={task.status}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
