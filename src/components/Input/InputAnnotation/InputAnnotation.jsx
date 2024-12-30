import React from "react";

import { BsInfoCircle } from "react-icons/bs";

const InputAnnotation = ({ text, ...props }) => {
  const mouseEnter = () =>
    (document.getElementById("text").style.display = "inline");
  const mouseLeave = () =>
    (document.getElementById("text").style.display = "none");

  return (
    <div
      className="group relative flex items-center space-x-2"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <BsInfoCircle className="text-gray-700 group-hover:text-blue-500" />
      <span
        id="text"
        className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden w-max px-3 py-1 text-sm text-white bg-black rounded shadow group-hover:block"
      >
        This is tooltip
        <div className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-black border-transparent"></div>
      </span>
    </div>
  );
};

export default InputAnnotation;
