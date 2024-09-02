import React from "react";

export const InputText = ({ value, onChange, placeholder, ...props }) => {
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
