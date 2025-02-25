import React, { useState } from "react";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; // Import menu icon

const Appbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  return (
    <div className="h-1/2 flex justify-between items-center max-w-screen">
      <div className="flex gap-5 ml-5 overflow-x-hidden">
        <div className="py-2 cursor-pointer">
          <Logo size={8} />
        </div>
        <div className="hidden md:block ml-10">
          <ul className="flex items-center gap-5 py-3 text-customGray-70">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
      <button
        className="md:hidden text-2xl text-white mr-9"
        onClick={() => setMenu(!menu)}
      >
        <FiMenu />
      </button>
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
      {/* Mobile Menu */}
      {menu && (
        <div className="absolute top-16 left-20 w-1/4 bg-indigo-500 rounded-md text-white flex flex-col items-center py-5 md:hidden">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-buttonYellow cursor-pointer">Home</li>
            <li className="hover:text-buttonYellow cursor-pointer">About</li>
            <li className="hover:text-buttonYellow cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Appbar;
