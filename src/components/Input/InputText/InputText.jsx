import React from "react";

const InputText = ({ /* value, onChange, */ ...props }) => {
  const { state, userText } = props;

  return (
    <input
      type="text"
      /*  value={value} */
      /* onChange={(e) => e.target.value} */
      placeholder={userText ? " Enter email" : " Text input is limited"}
      /* {...props} */
      className={`font-sans border-2 rounded-md  ${
        state === "Default"
          ? " border-black"
          : state === "Error"
            ? " border-red"
            : "border-green"
      } 
      ${userText ? "pointer-events-auto" : "pointer-events-none "}`}
    />
  );
};

export default InputText;
