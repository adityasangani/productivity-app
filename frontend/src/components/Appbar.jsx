import React from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-16 flex justify-between items-center">
      <div className="flex gap-5 ml-5">
        <div className="py-2 cursor-pointer">
          <Logo size={8} />
        </div>
        <div className="ml-10">
          <ul className="flex items-center gap-5 py-3 text-customGray-70">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-5 mx-5">
        <button
          onClick={() => {
            navigate("/signin");
          }}
          className="text-customGray-70 font-semibold hover:text-white cursor-pointer h-10 rounded-xl border-2 border-blueBorder w-20 hover:bg-blueBorder "
        >
          Sign In
        </button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
          className="bg-buttonYellow hover:bg-buttonYellowHover cursor-pointer h-10 rounded-xl font-semibold w-20"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Appbar;
