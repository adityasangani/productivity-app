import React, { useState } from "react";
import { LeftNav } from "../components/LeftNav";
import { TopBar } from "../components/TopBar";
import { RightBar } from "../components/RightBar";
import { DashboardFrame } from "../components/DashboardFrame";
import { DFC1 } from "../components/DFC1";
import { TaskComponent } from "../components/TaskComponent";
import { TrackerComponent } from "../components/TrackerComponent";
import { PomodoroComponent } from "../components/PomodoroComponent";
import SettingComponent from "../components/SettingComponent";

export const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");
  const [isNavOpen, setIsNavOpen] = useState(false); // Toggle for mobile nav

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
    <div className="flex h-screen">
      {/* Left Navigation */}
      <div
        className={`fixed z-50 lg:relative ${
          isNavOpen ? "block" : "hidden"
        } lg:block`}
      >
        <LeftNav setSelectedComponent={setSelectedComponent} />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-grow flex-col">
        <TopBar onMenuClick={() => setIsNavOpen(!isNavOpen)} />{" "}
        {/* Toggle button */}
        <DashboardFrame>{renderContent()}</DashboardFrame>
      </div>

      {/* Right Sidebar (Hide on small screens) */}
      <div className="hidden lg:block">
        <RightBar />
      </div>
    </div>
  );
};
