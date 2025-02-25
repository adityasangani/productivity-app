import React from "react";
import CalendarMonth from "./CalendarMonth";

const CalendarCard = () => {
  return (
    <div className="flex flex-col p-4 w-full md:w-5/6 shadow-md rounded-lg bg-white">
      <CalendarMonth />
    </div>
  );
};

export default CalendarCard;
