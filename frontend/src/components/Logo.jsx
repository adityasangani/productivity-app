import React from "react";
import logo from "../assets/logo.png";

const Logo = ({ size }) => {
  return <img src={logo} alt="" className={`w-${size} h-${size}`} />;
};

export default Logo;
