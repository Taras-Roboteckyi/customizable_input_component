import React from "react";

const InputLabel = ({ children, ...props }) => {
  const { labelSize } = props;

  const id = React.useId();

  return (
    <label
      htmlFor={id}
      {...props}
      className={`font-sans  text-midnight ${
        labelSize === "Small"
          ? "text-sm"
          : labelSize === "Medium"
            ? "text-lg"
            : "text-xl"
      }`}
    >
      {children}
    </label>
  );
};

export default InputLabel;
