import React from "react";
import { FiMenu } from "react-icons/fi";
import { Searchbar } from "./Searchbar";

export const TopBar = ({ onMenuClick }) => {
  return (
    <div className="fixed bg-white flex shadow-sm border-b h-16 w-screen left-60 z-10">
      <div className="h-full flex w-full items-center">
        <div className="ml-20">
          <button onClick={onMenuClick} className="md:hidden text-gray-700">
            <FiMenu />
          </button>
          <div className="hidden md:block">
            <Searchbar />
          </div>
        </div>
      </div>
    </div>
  );
};
