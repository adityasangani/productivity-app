import React from "react";

export const LeftNavComp = ({
  lightIcon,
  darkIcon,
  heading,
  color,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center ml-12 h-11 w-28 gap-3 cursor-pointer"
    >
      <img className="w-5" src={`${color ? lightIcon : darkIcon}`} alt="" />
      <div
        className={`${
          color ? "text-leftNavCompSelect" : "text-leftNavCompDeselect"
        } font-semibold text-sm`}
      >
        {heading}
      </div>
    </div>
  );
};
