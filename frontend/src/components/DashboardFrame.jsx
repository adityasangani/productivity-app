import React from "react";

export const DashboardFrame = ({ children }) => {
  return (
    <div
      className="relative mt-16 overflow-hidden bg-dashboardBg  w-full lg:w-[calc(100vw-35rem)]"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      {children}
    </div>
  );
};
