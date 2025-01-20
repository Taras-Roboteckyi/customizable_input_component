import React from "react";

import { CiSearch } from "react-icons/ci";
import { MdInput } from "react-icons/md";

import InputText from "../InputText/InputText";
import InputLabel from "../InputLabel/InputLabel";
import InputAnnotation from "../InputAnnotation/InputAnnotation";
import InputHelperText from "../InputHelperText/InputHelperText";

const InputGroup = ({
  label,
  labelSize = "Small",
  labelPosition = "Left",
  state = "Default",
  border = true,
  helperText = "",
  info = "",
  size = "Small",
  alignment = "Left",
  iconBefore = null,
  iconAfter = null,
  shortkey = "",
  userText = false,
}) => {
  console.log("labelPosition,", labelPosition);
  //const labelClass = `input-label ${labelSize}`;
  //const inputClass = `input-text ${size} ${state} ${alignment}`;
  //const inputWrapperClass = `input-wrapper ${border ? "border-2 rounded-md border-black" : ""}`;
  return (
    <div
    /* className={`${inputWrapperClass}  `} */
    >
      <div
        className={` flex md:mb-1 ${
          labelPosition === "Left"
            ? "justify-start"
            : labelPosition === "Center"
              ? "justify-center"
              : "justify-end"
        }`}
      >
        {label && <InputLabel labelSize={labelSize}>Email</InputLabel>}
        {info && (
          <InputAnnotation
            text={"This is a tooltip"}
            style={{ fontStyle: "italic", fontSize: "0.85em" }}
          />
        )}
      </div>

      <div
        className="input-container"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {iconBefore && (
          <CiSearch
            className={` absolute left-1 top-1/2 transform -translate-y-1/2  ${
              size === "Small"
                ? "size-4"
                : size === "Medium"
                  ? "size-5"
                  : "size-6"
            }`}
          />
        )}

        <InputText
          state={state}
          userText={userText}
          size={size}
          border={border}
          alignment={alignment}
          /*   style={{
            paddingLeft: iconBefore ? "1.5rem" : undefined,
            paddingRight: iconAfter ? "1.5rem" : undefined,
          }} */
        />

        {iconAfter && (
          <MdInput
            className={` absolute right-1 top-1/2 transform -translate-y-1/2  ${
              size === "Small"
                ? "size-4"
                : size === "Medium"
                  ? "size-5"
                  : "size-6"
            }`}
          />
        )}
      </div>
      {helperText && <InputHelperText />}

      {/* {shortkey && <InputAnnotation text={`Shortcut: ${shortkey}`} />} */}
    </div>
  );
};

export default InputGroup;
