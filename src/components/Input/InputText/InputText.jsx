import React from "react";

const InputText = ({ value, onChange, placeholder, ...props }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default InputText;
