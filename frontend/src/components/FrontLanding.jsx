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
    <div className="flex flex-col bg-skyblue min-h-screen">
      <div className="">
        <Appbar />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 gap-10 mt-10 px-4 md:px-16">
        {/* Left Side Text */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <button className="text-white cursor-pointer py-1 px-2 rounded-xl border-2 border-blueBorder">
            Boost Your Productivity Today{" "}
            <span
              onClick={() => smoothScroll("featureSection")}
              className="text-buttonYellow hover:text-buttonYellowHover ml-2 text-sm font-medium"
            >
              Read More
            </span>
          </button>
          <h1 className="mt-6 font-semibold text-white text-3xl md:text-5xl 3xl:text-7xl">
            Welcome to Your Ultimate Productivity Dashboard
          </h1>
          <p className="text-white mt-5 text-lg md:text-xl 3xl:text-3xl">
            Track habits, use Pomodoro timer, and visualize your progress with
            our all-in-one productivity tool.
          </p>
          <div className="hidden md:flex flex-col lg:flex-row gap-3 mt-6">
            <div onClick={() => smoothScroll("faqLanding")}>
              <BorderButton text="Learn More" />
            </div>
            <div onClick={() => navigate("/signup")}>
              <YellowButton text="Get Started" />
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col w-full gap-3 lg:mt-6">
          <div onClick={() => smoothScroll("faqLanding")}>
            <button className="text-white font-semibold cursor-pointer py-1 px-2 rounded-xl border-2 w-full border-blueBorder hover:bg-blueBorder">
              Learn More
            </button>
          </div>
          <div onClick={() => navigate("/signup")}>
            <button className="cursor-pointer font-semibold py-1 px-2 rounded-xl w-full bg-buttonYellow hover:bg-buttonYellowHover">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="w-10/12 lg:w-9/12"
            src={webbrowser}
            alt="Web Preview"
          />
        </div>
      </div>
    </div>
  );
};
