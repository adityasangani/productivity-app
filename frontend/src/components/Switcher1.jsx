import React from "react";

const Switcher1 = ({ toggleClick, setToggleClick }) => {
  const handleCheckboxChange = () => {
    setToggleClick(!toggleClick); // Toggling the state
  };

  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={toggleClick} // Control based on state
          onChange={handleCheckboxChange} // Handle the toggle action
          className="sr-only"
        />
        <div
          className={`block h-6 w-10 rounded-full bg-[#E5E7EB] ${
            toggleClick ? " bg-leftNavCompSelect" : "bg-[#E5E7EB]"
          }`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 h-4 w-4 rounded-full transition bg-white ${
            toggleClick ? "translate-x-full " : ""
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Switcher1;
