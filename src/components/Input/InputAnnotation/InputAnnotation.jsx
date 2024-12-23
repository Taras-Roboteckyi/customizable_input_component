import React from "react";

import { BsInfoCircle } from "react-icons/bs";

const InputAnnotation = ({ text, ...props }) => {
  const mouseEnter = () =>
    (document.getElementById("text").style.display = "inline");
  const mouseLeave = () =>
    (document.getElementById("text").style.display = "none");

  return (
    <div
      className="group flex items-center space-x-2"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <BsInfoCircle className="text-gray-700 group-hover:text-blue-500" />
      <span id="text" className="font-sans text-sm text-gray-700 hidden">
        This is tooltip
      </span>
    </div>
  );
};

export default InputAnnotation;
