import React from "react";
import logo from "../assets/logo.png";
import logoblack from "../assets/logo_black.png";

const Logo = ({ size, mode = logo }) => {
  const sizeClasses = {
    4: "w-4 h-4",
    8: "w-8 h-8",
    24: "w-24 h-24",
  };
  return <img src={mode} alt="" className={`${sizeClasses[size]}`} />;
};

export default Logo;
