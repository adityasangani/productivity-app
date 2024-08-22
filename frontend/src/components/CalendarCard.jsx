import React from "react";
import CalendarMonth from "./CalendarMonth";

const CalendarCard = () => {
  return (
    <div className="flex flex-col p-3 w-5/6 shadow-md">
      <CalendarMonth />
    </div>
  );
};

export default CalendarCard;
