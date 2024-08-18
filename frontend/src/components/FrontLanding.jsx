import React from "react";
import Appbar from "../components/Appbar";
import webbrowser from "../assets/webbrowser.png";
import { YellowButton } from "../components/YellowButton";
import BorderButton from "../components/BorderButton";
import { useNavigate } from "react-router-dom";
import { smoothScroll } from "../functionality";

export const FrontLanding = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-skyblue h-screen">
      <div className="">
        <Appbar />
      </div>
      <div className="flex mt-36 h-64 gap-20">
        <div className="flex flex-col ml-16 w-1/2 ">
          <div>
            <button className="text-white cursor-pointer py-1 px-2 rounded-xl border-2 border-blueBorder">
              Boost Your Productivity Today{" "}
              <span
                onClick={() => smoothScroll("featureSection")}
                className="text-buttonYellow hover:text-buttonYellowHover ml-2 text-sm font-medium"
              >
                Read More
              </span>
            </button>
          </div>
          <div>
            <div className="mt-8 font-semibold text-white text-6xl">
              Welcome to Your Ultimate Productivity Dashboard
            </div>
          </div>
          <div>
            <div className="text-white my-7 text-xl">
              Track habits, use Pomodoro timer, and visualize your progress with
              our all-in-one productivity tool.
            </div>
          </div>
          <div className="flex gap-3">
            <div onClick={() => smoothScroll("faqLanding")}>
              <BorderButton text={"Learn More"} />
            </div>
            <div
              onClick={() => {
                navigate("/signup");
              }}
            >
              <YellowButton text="Get Started" />
            </div>
          </div>
        </div>
        <div>
          <img className="relative bottom-2" src={webbrowser} alt="" />
        </div>
      </div>
    </div>
  );
};
