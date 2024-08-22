import React from "react";
import CalendarCard from "./CalendarCard";

export const RightBar = () => {
  const dateObj = new Date();
  return (
    <div className="fixed bg-white border-l shadow-sm right-0 w-80 top-16 h-screen  ">
      <div className="mt-10 flex justify-center">
        <CalendarCard />
      </div>
    </div>
  );
};
