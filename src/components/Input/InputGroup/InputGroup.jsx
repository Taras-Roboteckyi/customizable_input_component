import React from "react";
import InputText from "./InputText";
import InputLabel from "./InputLabel";

const InputGroup = ({ label, value, onChange, placeholder, id }) => {
  return (
    <div>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputText
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputGroup;
