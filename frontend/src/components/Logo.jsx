import React from "react";
import logo from "../assets/logo.png";

const Logo = ({ size }) => {
  const sizeClasses = {
    4: "w-4 h-4",
    8: "w-8 h-8",
    24: "w-24 h-24",
  };
  return <img src={logo} alt="" className={sizeClasses[size]} />;
};

export default Logo;
