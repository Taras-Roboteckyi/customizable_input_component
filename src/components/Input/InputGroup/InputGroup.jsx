import React from "react";
import InputText from "../InputText/InputText";
import InputLabel from "../InputLabel/InputLabel";
import InputAnnotation from "../InputAnnotation/InputAnnotation";

const InputGroup = ({
  label,
  labelSize = "Small",
  labelPosition = "Left",
  state = "Default",
  border = true,
  helperText = "",
  info = "",
  size = "sm",
  alignment = "left",
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
      {label && (
        <div
          className={` flex ${
            labelPosition === "Left"
              ? "justify-start"
              : labelPosition === "Center"
                ? "justify-center"
                : "justify-end"
          }`}
        >
          <InputLabel labelSize={labelSize}>Email</InputLabel>
          {info && (
            <InputAnnotation
              text={"This is a tooltip"}
              style={{ fontStyle: "italic", fontSize: "0.85em" }}
            />
          )}
        </div>
      )}
      <div
        className="input-container"
        style={{
          /*  position: "relative", */ display: "flex",
          alignItems: "center",
        }}
      >
        {iconBefore && <span className="icon-before">{iconBefore}</span>}
        {border ? (
          <InputText
            state={state}
            userText={userText}
            style={{
              paddingLeft: iconBefore ? "1.5rem" : undefined,
              paddingRight: iconAfter ? "1.5rem" : undefined,
            }}
          />
        ) : (
          ""
        )}
        {iconAfter && <span className="icon-after">{iconAfter}</span>}
      </div>
      {/* {helperText && <InputAnnotation text={helperText} />}

      {shortkey && <InputAnnotation text={`Shortcut: ${shortkey}`} />} */}
    </div>
  );
};

export default InputGroup;
