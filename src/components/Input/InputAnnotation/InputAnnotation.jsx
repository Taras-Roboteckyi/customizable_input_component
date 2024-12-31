import React from "react";
import { useState } from "react";

import { BsInfoCircle } from "react-icons/bs";

const InputAnnotation = ({ text, ...props }) => {
  /* const mouseEnter = () =>
    (document.getElementById("text").style.display = "inline");
  const mouseLeave = () =>
    (document.getElementById("text").style.display = "none"); */
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const mouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const mouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div
      className="relative flex items-center space-x-2"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <BsInfoCircle className="text-gray-700 text-2xl cursor-pointer" />
      {isTooltipVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
          <div className="relative bg-white text-black text-sm px-3 py-1 rounded shadow-lg">
            This is tooltip
            {/* Трикутник */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-3 h-3 bg-white rotate-45"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputAnnotation;
