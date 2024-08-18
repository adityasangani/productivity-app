import React from "react";
import { Searchbar } from "./Searchbar";

export const TopBar = () => {
  return (
    <div className="fixed bg-white flex shadow-sm border-b h-16 w-screen left-60 z-10">
      <div className="h-full flex w-full items-center">
        <div className="ml-20">
          <Searchbar />
        </div>
      </div>
    </div>
  );
};
