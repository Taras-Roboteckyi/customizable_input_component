import React from "react";

const InputLabel = ({ htmlFor, children, ...props }) => {
  return (
    <label htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
};

export default InputLabel;
