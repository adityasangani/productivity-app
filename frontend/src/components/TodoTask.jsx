import React from "react";
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
      className="w-full border-2 flex flex-col touch-none cursor-grab active:opacity-70 active:border-1 active:border-solid"
      draggable
      key={id}
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{label}</p>
    </div>
  );
};
