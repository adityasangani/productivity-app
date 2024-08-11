import React from "react";
import illustration from "../assets/illustration.png";
import LabeledInput from "../components/LabeledInput";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-gradient-blue grid grid-cols-12 ">
      <div className="col-span-4 flex flex-col">
        <div className="m-5">
          <Logo size="8" />
        </div>
        <div className="m-7 text-white font-bold text-6xl">
          Track. Focus. Achieve.
        </div>
        <img src={illustration} className="relative left-48 w-4/5" alt="" />
      </div>
      <div className="col-span-8 bg-white rounded-tl-3xl rounded-bl-3xl flex justify-center">
        <div className="flex flex-col mt-32 w-4/6 max-w-full">
          <div className="flex ">
            <div className="text-3xl font-bold">Login to your Account</div>
          </div>
          <div className="flex mt-10">
            <div className="flex flex-col gap-2 flex-grow">
              <LabeledInput inputname="Email" />
              <LabeledInput inputname="Password" />
              <button className="bg-black text-white text-sm font-medium h-11 rounded-md transition-transform duration-150 transform active:scale-95 active:shadow-inner">
                Login
              </button>
              <div className="text-grey text-sm">
                Don't have an account?{" "}
                <span
                  onClick={() => {
                    navigate("/signup");
                  }}
                  className="text-skyblue font-medium cursor-pointer"
                >
                  Sign up
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
