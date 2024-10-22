import React from "react";
import Tags from "./Tags";
export const TodoTask = ({
  id,
  title,
  description,
  label,
  setActiveCard,
  index,
}) => {
  return (
    <div
      className="w-full shadow-sm flex flex-col touch-none cursor-grab active:opacity-70 active:border-1 active:border-solid rounded-lg bg-white"
      draggable
      key={id}
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <div className="flex justify-between m-3">
        <div className="">
          <Tags tagName={label} />
        </div>
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>
      <h3 className="font-bold text-md mx-3">{title}</h3>
      <p className="text-sm text-gray-500 mx-3 mb-5 mt-2">{description}</p>
    </div>
  );
};
