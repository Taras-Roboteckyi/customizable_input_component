import React from "react";

import { BsInfoCircle } from "react-icons/bs";

const InputAnnotation = ({ text, ...props }) => {
  return (
    <>
      <BsInfoCircle />
      <small {...props}>{text}</small>
    </>
  );
};

export default InputAnnotation;
