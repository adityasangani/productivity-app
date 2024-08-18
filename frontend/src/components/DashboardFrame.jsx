import React from "react";

export const DashboardFrame = ({ children }) => {
  return (
    <div
      className="absolute mt-16 ml-60 p-5 w-8/12 overflow-hidden bg-dashboardBg"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      {children}
    </div>
  );
};
