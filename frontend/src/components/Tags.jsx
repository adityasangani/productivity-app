import React from "react";

const tagsBg = {
  Study: "bg-purple-300",
  Code: "bg-blue-300",
  Gym: "bg-red-300",
  Meditate: "bg-yellow-300",
};

const tagsTxt = {
  Study: "text-purple-700",
  Code: "text-blue-700",
  Gym: "text-red-700",
  Meditate: "text-yellow-700",
};

const Tags = ({ tagName }) => {
  return (
    <div
      className={`${tagsBg[tagName]} ${tagsTxt[tagName]} text-sm rounded-md font-medium px-3 py-1 text`}
    >
      {tagName}
    </div>
  );
};

export default Tags;
