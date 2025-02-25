import React from "react";
import { TodoTask } from "./TodoTask";
import { DropArea } from "./DropArea";

export const TaskColumn = ({ title, tasks, status, setActiveCard, onDrop }) => {
  return (
    <div className="mx-2 sm:mx-3 w-full sm:w-1/3 min-w-[250px]">
      {/* Title */}
      <div className="text-sm font-semibold mx-2 mb-2 text-center sm:text-left">
        {title}
      </div>

      {/* Content Box */}
      <div className="flex rounded-md px-3 flex-col bg-orange-200 p-3 shadow-md">
        {/* DropArea at the top */}
        <DropArea onDrop={() => onDrop(status, 0)} />

        {/* Task List */}
        <div className="flex flex-col ">
          {tasks.map(
            (task, index) =>
              task.status === status && (
                <React.Fragment key={task.id}>
                  <TodoTask
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    label={task.label}
                    index={index}
                    setActiveCard={setActiveCard}
                    status={status}
                  />
                  <DropArea onDrop={() => onDrop(status, index + 1)} />
                </React.Fragment>
              )
          )}
        </div>
      </div>
    </div>
  );
};
