import React from "react";

const InputText = ({ /* value, onChange, */ ...props }) => {
  const { state, userText } = props;

  return (
    <input
      type="text"
      /*  value={value} */
      /* onChange={(e) => e.target.value} */
      placeholder={userText ? "можна вводити" : " немає "}
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
