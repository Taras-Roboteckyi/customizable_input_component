import React, { useRef, useEffect } from "react";

const InputText = ({ ...props }) => {
  const { state, userText, size, border, alignment, shortKey } = props;

  const inputRef = useRef(null);

  const handleKeydown = (event) => {
    if (userText && shortKey && event.altKey && event.key === "e") {
      event.preventDefault(); // Запобігаємо стандартній поведінці
      inputRef.current.focus(); // Фокусуємо інпут
    }
  };

  useEffect(() => {
    if (shortKey) window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [shortKey]); // Виконувати ефект при зміні пропсів

  return (
    <input
      type="text"
      ref={inputRef}
      placeholder={userText ? " Input..." : " Text input is limited"}
      className={`w-full font-sans border-2 rounded-md  p-1.5 pr-9  ${
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
