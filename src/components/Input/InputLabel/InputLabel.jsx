import React from "react";

const InputLabel = ({ children, ...props }) => {
  const id = React.useId();

  return (
    <label htmlFor={id} {...props} className="font-sans text-xl mr-3">
      {children}
    </label>
  );
};

export default InputLabel;
