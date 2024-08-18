import React from "react";
import { LeftNav } from "../components/LeftNav";
import { TopBar } from "../components/TopBar";
import { RightBar } from "../components/RightBar";
import { DashboardFrame } from "../components/DashboardFrame";
import { DFC1 } from "../components/DFC1";

export const Dashboard = () => {
  return (
    <>
      <LeftNav />
      <TopBar />
      <RightBar />
      <DashboardFrame>
        <DFC1 />
      </DashboardFrame>
    </>
  );
};

{
  /* <DashboardFrame>
        <DFC1 />
      </DashboardFrame> */
}
