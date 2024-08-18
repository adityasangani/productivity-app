import React from "react";
import { LeftNav } from "../components/LeftNav";
import { TopBar } from "../components/TopBar";
import { RightBar } from "../components/RightBar";
import { DashboardFrame } from "../components/DashboardFrame";
// import { DFC1 } from "../components/DFC1";

export const Dashboard = () => {
  return (
    <>
      <LeftNav />
      <TopBar />
      <RightBar />
      {/* <div className="absolute mt-16 ml-60 p-5 w-8/12 min-h-screen overflow-hidden bg-yellow-500">
        <div>
          To adjust the border color to be lighter and add a nice shadow effect
          to your dashboard components, you can modify the border and box-shadow
          properties in your Tailwind CSS classes. Here's how you can do it:
        </div>
      </div> */}
      <DashboardFrame />
    </>
  );
};

{
  /* <DashboardFrame>
        <DFC1 />
      </DashboardFrame> */
}
