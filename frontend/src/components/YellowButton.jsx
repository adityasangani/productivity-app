import React from "react";

export const YellowButton = ({ text }) => {
  return (
    <button className="cursor-pointer font-semibold py-1 px-2 rounded-xl bg-buttonYellow hover:bg-buttonYellowHover">
      {text}
    </button>
  );
};
