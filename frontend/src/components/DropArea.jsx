import React, { useState } from "react";

export const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <div
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={`${
        showDrop
          ? "w-full opacity-100 transition-all duration-200 ease-in-out h-24 border-2 p-4 mb-4 text-[#dcdcdc] border-dashed border-[#dcdcdc]"
          : "opacity-0"
      }`}
    >
      Drop here
    </div>
  );
};
