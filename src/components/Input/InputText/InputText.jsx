import React from "react";

const InputText = ({ /* value, onChange, */ ...props }) => {
  const { state, userText, size, border, alignment } = props;

  return (
    <input
      type="text"
      /*  value={value} */
      /* onChange={(e) => e.target.value} */
      placeholder={userText ? " Input..." : " Text input is limited"}
      /* {...props} */
      className={`font-sans border-2 rounded-md  p-1.5 pr-9  ${
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
           ? "text-sm pl-6"
           : size === "Medium"
             ? "text-lg pl-7"
             : "text-xl pl-8"
       }`}
    />
  );
};

export default InputText;
