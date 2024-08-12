import React from "react";

const LabeledInput = ({ onChange, inputname, type = "text" }) => {
  return (
    <div className="flex flex-col relative w-full mb-6">
      <label
        htmlFor=""
        className="absolute -top-3 left-1/5 transform translate-x-[20%] bg-white px-1 text-grey text-sm "
      >
        {inputname}
      </label>
      <input
        type={type}
        onChange={onChange}
        className="w-full h-11 px-4 py-2 text-md border border-grey rounded-md"
      />
    </div>
  );
};

export default LabeledInput;
