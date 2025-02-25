import React, { useState } from "react";
import Logo from "./Logo";
import logoblack from "../assets/logo_black.png";
import dashboardicon from "../assets/dashboard_icon.png";
import dashboardiconDeselect from "../assets/dashboard_icon_deselect.png";
import taskIcon from "../assets/taskIcon.png";
import taskIconDeselect from "../assets/taskIconDeselect.png";
import timerIcon3 from "../assets/timerIcon3.png";
import timerIcon3Deselect from "../assets/timerIcon3Deselect.png";
import tracker from "../assets/tracker.png";
import trackerDeselect from "../assets/trackerDeselect.png";
import setting from "../assets/setting.png";
import settingDeselect from "../assets/settingDeselect.png";
import { LeftNavComp } from "./LeftNavComp";

export const LeftNav = ({ setSelectedComponent }) => {
  const [selected, setSelected] = useState("dashboard");

  function onClick(e) {
    setSelected(e);
  }

  return (
    <div className="h-screen border-r bg-white shadow-sm w-60 flex flex-col gap-10 fixed lg:relative">
      <div className="w-full flex justify-center cursor-pointer border-b mb-4 h-16">
        <div className="flex items-center gap-3">
          <Logo size={"8"} mode={logoblack} />
          <div className="font-semibold">ProductivityPro</div>
        </div>
      </div>
      <LeftNavComp
        lightIcon={dashboardicon}
        darkIcon={dashboardiconDeselect}
        heading="Dashboard"
        color={selected === "dashboard"}
        onClick={() => {
          onClick("dashboard");
          setSelectedComponent("dashboard");
        }}
      />
      <LeftNavComp
        lightIcon={taskIcon}
        darkIcon={taskIconDeselect}
        heading="Tasks"
        color={selected === "task"}
        onClick={() => {
          onClick("task");
          setSelectedComponent("task");
        }}
      />
      <LeftNavComp
        lightIcon={timerIcon3}
        darkIcon={timerIcon3Deselect}
        heading="Pomodoro"
        color={selected === "pomodoro"}
        onClick={() => {
          onClick("pomodoro");
          setSelectedComponent("pomodoro");
        }}
      />
      <LeftNavComp
        lightIcon={tracker}
        darkIcon={trackerDeselect}
        heading="Tracker"
        color={selected === "tracker"}
        onClick={() => {
          onClick("tracker");
          setSelectedComponent("tracker");
        }}
      />
      <LeftNavComp
        lightIcon={setting}
        darkIcon={settingDeselect}
        heading="Settings"
        color={selected === "setting"}
        onClick={() => {
          onClick("setting");
          setSelectedComponent("setting");
        }}
      />
    </div>
  );
};
