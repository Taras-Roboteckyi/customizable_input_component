import React from "react";
import { useState } from "react";

import { BsInfoCircle } from "react-icons/bs";

const InputAnnotation = ({ text, ...props }) => {
  /* const [isHovered, setIsHovered] = useState(false); */
  return (
    <div className="flex items-center space-x-2">
      <div
        className="group flex items-center space-x-2"
        onMouseEnter={() =>
          (document.getElementById("text").style.display = "inline")
        }
        onMouseLeave={() =>
          (document.getElementById("text").style.display = "none")
        }
      >
        <BsInfoCircle className="text-gray-700 group-hover:text-blue-500" />
        <span id="text" className="text-gray-700 hidden">
          Текст підсвічується
        </span>
      </div>
    </div>
  );
};

export default InputAnnotation;
