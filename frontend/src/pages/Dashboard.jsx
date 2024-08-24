import React, { useState } from "react";
import { LeftNav } from "../components/LeftNav";
import { TopBar } from "../components/TopBar";
import { RightBar } from "../components/RightBar";
import { DashboardFrame } from "../components/DashboardFrame";
import { DFC1 } from "../components/DFC1";
import { TaskComponent } from "../components/TaskComponent";
import { TrackerComponent } from "../components/TrackerComponent";
import { SettingComponent } from "../components/SettingComponent";
import { PomodoroComponent } from "../components/PomodoroComponent";

export const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");
  const renderContent = () => {
    switch (selectedComponent) {
      case "dashboard":
        return <DFC1 />;
      case "task":
        return <TaskComponent />;
      case "pomodoro":
        return <PomodoroComponent />;
      case "tracker":
        return <TrackerComponent />;
      case "setting":
        return <SettingComponent />;
      default:
        return <DFC1 />;
    }
  };

  return (
    <>
      <LeftNav setSelectedComponent={setSelectedComponent} />
      <TopBar />
      <RightBar />
      <DashboardFrame>{renderContent()}</DashboardFrame>
    </>
  );
};
