import React from "react";

export const DashboardFrame = ({ children }) => {
  return (
    <div className="absolute mt-16 ml-60 p-5 w-8/12 min-h-screen overflow-hidden bg-yellow-500">
      {children}
    </div>
  );
};
