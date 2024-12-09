import React, { useState } from "react";

import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

import InputGroup from "../InputGroup/InputGroup";
import { Select } from "../Select/Select";
import { Checkbox } from "../Checkbox/Checkbox";

const InputControlPanel = () => {
  const [labelSize, setLabelSize] = useState("Small");
  const [state, setState] = useState("Default");
  const [labelPosition, setLabelPosition] = useState("Top");
  const [border, setBorder] = useState(false);
  const [helperText, setHelperText] = useState(false);
  const [label, setLabel] = useState(false);
  const [info, setInfo] = useState(false);

  const [size, setSize] = useState("Small");
  const [alignment, setAlignment] = useState("Left");
  const [iconAfter, setIconAfter] = useState(null);
  const [iconBefore, setIconBefore] = useState(null);
  const [shortKey, setShortkey] = useState("");
  const [checkedUserText, setCheckedUserText] = useState(false);
  const [isOpen, setIsOpen] = useState(true); //Випадаюче меню

  const handleChangeUserText = (nextChecked) => {
    setCheckedUserText(nextChecked);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectLabelSizeChange = (event) => {
    setLabelSize(event.target.value); // Обробка зміни
  };

  const handleSelectStateChange = (event) => {
    setState(event.target.value); // Обробка зміни select
  };

  const handleSelectLabelPosition = (event) => {
    setLabelPosition(event.target.value); // Обробка зміни select
  };

  return (
    <div className=" px-5 py-10 md:flex justify-center ">
      <div className="bg-[url('/src/images/background.jpg')] bg-cover bg-center   p-5 mb-5 md:mb-0">
        <div className=" flex justify-between mb-5 md:w-96">
          <div className="flex content-center">
            <p className="font-mono font-semibold text-xl text-white mr-3">
              Input
            </p>
            <div onClick={toggleDropdown} className="pt-1.5">
              {isOpen ? (
                <GoChevronUp className="fill-white cursor-pointer" />
              ) : (
                <GoChevronDown className="fill-white cursor-pointer" />
              )}
            </div>
          </div>
          <div className="flex pt-1.5 ">
            <TfiLayoutGrid4 className="mr-4 fill-white" />
            <FaArrowUpRightFromSquare className="mr-4 fill-white" />
            <BsThreeDots className="fill-white" />
          </div>
        </div>
        {isOpen && (
          <div className="dropdown-content">
            <div className="grid grid-cols-1 ">
              <Select
                value={labelSize}
                onChange={handleSelectLabelSizeChange}
                option={{ first: "Small", second: "Medium", third: "Large" }}
                text="Label size"
              />
              <Select
                value={state}
                onChange={handleSelectStateChange}
                option={{ first: "Default", second: "Error", third: "Success" }}
                text="State"
              />
              <Checkbox
                text="User text:"
                checked={checkedUserText}
                onChange={handleChangeUserText}
              />

              <Select
                value={labelPosition}
                onChange={handleSelectLabelPosition}
                option={{ first: "Left", second: "Center", third: "Right" }}
                text="Label position"
              />

              <Checkbox
                text="Helper text:"
                checked={helperText}
                onChange={() => setHelperText(!helperText)}
              />

              <Checkbox
                text="Label:"
                checked={label}
                onChange={() => setLabel(!label)}
              />

              <Checkbox
                text="Info:"
                checked={info}
                onChange={() => setInfo(!info)}
              />
            </div>
            <div>
              <div className="flex align-center mb-5">
                <div className="mr-1 pt-1.5">
                  <GoChevronDown className="fill-white  " />
                </div>
                <p className="font-mono font-semibold text-lg text-white">
                  _base_input
                </p>
              </div>
              <Select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                option={{ first: "Small", second: "Medium", third: "Large" }}
                text="Size"
              />

              <Select
                value={alignment}
                onChange={(e) => setAlignment(e.target.value)}
                option={{ first: "Left", second: "Center", third: "Right" }}
                text="Alignment"
              />

              <Checkbox
                text="Border:"
                checked={border}
                onChange={() => setBorder(!border)}
              />

              <Checkbox
                text="Icon after:"
                checked={iconAfter}
                onChange={() => setIconAfter(!iconAfter)}
              />

              <Checkbox
                text="Icon before:"
                checked={iconBefore}
                onChange={() => setIconBefore(!iconBefore)}
              />
              <Checkbox
                text="Shortkey:"
                checked={shortKey}
                onChange={() => setShortkey(!shortKey)}
              />
            </div>
          </div>
        )}
      </div>
      <div className="order-last md:content-center md:w-62 mr-5">
        <InputGroup
          label={label}
          labelSize={labelSize}
          labelPosition={labelPosition}
          state={state}
          border={border}
          helperText={helperText}
          info={info}
          size={size}
          alignment={alignment}
          iconBefore={iconBefore}
          iconAfter={iconAfter}
          shortkey={shortKey}
          userText={checkedUserText}
        />
      </div>
    </div>
  );
};

export default InputControlPanel;
