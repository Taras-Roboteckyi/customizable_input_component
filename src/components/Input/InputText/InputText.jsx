import React from "react";

const InputText = ({ /* value, onChange, */ ...props }) => {
  const { state, userText, size, border, alignment } = props;

  return (
    <input
      type="text"
      /*  value={value} */
      /* onChange={(e) => e.target.value} */
      placeholder={userText ? " Enter email" : " Text input is limited"}
      /* {...props} */
      className={`font-sans border-2 rounded-md  p-1.5 ${
        state === "Default"
          ? " border-black"
          : state === "Error"
            ? " border-red"
            : "border-green"
      } 
      ${border ? "border focus:border" : "border-none focus:outline-none"}
      ${userText ? "pointer-events-auto" : "pointer-events-none "} 
      ${alignment === "Left" ? "text-left" : alignment === "Center" ? "text-center" : "text-right"}
       ${
         size === "Small"
           ? "text-sm"
           : size === "Medium"
             ? "text-lg"
             : "text-xl"
       }`}
    />
  );
};

export default InputText;
