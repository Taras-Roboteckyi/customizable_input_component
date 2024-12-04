import React from "react";
import InputText from "../InputText/InputText";
import InputLabel from "../InputLabel/InputLabel";
import InputAnnotation from "../InputAnnotation/InputAnnotation";

const InputGroup = ({
  label,
  labelSize = "Small",
  labelPosition = "top",
  state = "default",
  border = true,
  helperText = "",
  info = "",
  size = "sm",
  alignment = "left",
  iconBefore = null,
  iconAfter = null,
  shortkey = "",
  userText = false,
  ...props
}) => {
  //const labelClass = `input-label ${labelSize}`;
  //const inputClass = `input-text ${size} ${state} ${alignment}`;
  //const inputWrapperClass = `input-wrapper ${border ? "border-2 rounded-md border-black" : ""}`;

  return (
    <div
    /* className={`${inputWrapperClass}  `} */

    /* style={{
        display: "flex",
        flexDirection: labelPosition === "top" ? "column" : "row",
      }} */
    >
      {label && <InputLabel>Email</InputLabel>}
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
            /* className={inputClass} */
            className="border-2 rounded-md border-black"
            {...props}
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
      {helperText && <InputAnnotation text={helperText} />}
      {info && (
        <InputAnnotation
          text={info}
          style={{ fontStyle: "italic", fontSize: "0.85em" }}
        />
      )}
      {shortkey && <InputAnnotation text={`Shortcut: ${shortkey}`} />}
    </div>
  );
};

export default InputGroup;
