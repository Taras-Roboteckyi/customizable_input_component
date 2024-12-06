import React from "react";

const InputText = ({ value, onChange, placeholder, ...props }) => {
  const { state } = props;
  console.log("state", state);
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      /* {...props} */
      className={`font-sans border-2 rounded-md  ${
        state === "Default"
          ? " border-black"
          : state === "Error"
            ? " border-red"
            : "border-green"
      }`}
    />
  );
};

export default InputText;
