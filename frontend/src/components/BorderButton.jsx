import React from "react";

const BorderButton = ({ text }) => {
  return (
    <button className="text-white font-semibold cursor-pointer py-1 px-2 rounded-xl border-2 border-blueBorder hover:bg-blueBorder">
      {text}
    </button>
  );
};

export default BorderButton;
