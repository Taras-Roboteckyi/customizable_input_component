import React from "react";

const InputAnnotation = ({ text, ...props }) => {
  return <small {...props}>{text}</small>;
};

export default InputAnnotation;
