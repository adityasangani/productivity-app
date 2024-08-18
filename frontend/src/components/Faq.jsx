import React, { useState } from "react";

const Faq = ({ question, description }) => {
  const [click, setClick] = useState(false);

  return (
    <div
      onClick={() => {
        setClick(!click);
      }}
      className="flex cursor-pointer flex-col border-2 rounded-xl border-greyBorder bg-faqGrey p-3 w-full"
    >
      <div className="flex justify-between">
        <div className="font-semibold">{question}</div>
        <div className="cursor-pointer transition-colors duration-300">
          {click === false ? (
            <svg
              onClick={(e) => {
                e.stopPropagation();
                setClick(!click);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5 text-gray-500 hover:text-slate-400 transition-colors duration-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              onClick={(e) => {
                e.stopPropagation();
                setClick(!click);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5 text-gray-500 hover:text-slate-400 transition-colors duration-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        className={`text-grey font-normal mt-3 overflow:hidden transition-all duration-300 ${
          click ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {description}
      </div>
    </div>
  );
};

export default Faq;
