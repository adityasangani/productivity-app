import React from "react";
import { TodoTask } from "./TodoTask";
import { DropArea } from "./DropArea";

export const TaskColumn = ({ title, tasks, status, setActiveCard, onDrop }) => {
  return (
    <div className="mx-3">
      {/* Title above the box */}
      <div className="text-sm font-semibold mb-2 mx-2">{title}</div>

      {/* Content box */}
      <div className="flex rounded-md p-3 border-2 flex-col">
        {/* DropArea at the top */}
        <DropArea onDrop={() => onDrop(status, 0)} />

        {/* List of tasks filtered by status */}
        <div className="flex flex-col gap-3 mt-1">
          {tasks.map(
            (task, index) =>
              task.status === status && (
                <React.Fragment key={index}>
                  <TodoTask
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    label={task.label}
                    index={index}
                    setActiveCard={setActiveCard}
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
