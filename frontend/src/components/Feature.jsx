import React from "react";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";

const Feature = ({ feature, icon }) => {
  return (
    <div className="flex gap-4">
      <img className="w-8" src={icon} alt="" />
      <div className="font-semibold text-base">{feature}</div>
    </div>
  );
};

export default Feature;
