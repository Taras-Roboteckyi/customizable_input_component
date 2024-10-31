import React, { useState } from "react";
import Switch from "react-switch";
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
  const [borderTwo, setBorderTwo] = useState(false);
  const [iconAfter, setIconAfter] = useState(null);
  const [iconBefore, setIconBefore] = useState(null);
  const [shortKey, setShortkey] = useState("");
  const [checkedUserText, setCheckedUserText] = useState(false);
  const [isOpen, setIsOpen] = useState(false); //Випадаюче меню

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
    <div>
      <div>
        <p>Input</p>
        <div onClick={toggleDropdown}>
          {isOpen ? <GoChevronUp /> : <GoChevronDown />}
        </div>
        <div>
          <TfiLayoutGrid4 />
          <FaArrowUpRightFromSquare />
          <BsThreeDots />
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-content">
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
            option={{ first: "Top", second: "Left" }}
            text="Label position"
          />

          {/* <Checkbox
            text="Border:"
            checked={border}
            onChange={() => setBorder(!border)}
          /> */}

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

          <div>
            <div>
              <GoChevronDown />
              <p>_base_input</p>
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
              checked={borderTwo}
              onChange={() => setBorderTwo(!borderTwo)}
            />

            <Checkbox
              text="Icon after:"
              checked={iconAfter}
              onChange={() => setIconAfter(!iconAfter)}
            />

            <label>
              Icon before:
              <Switch
                checked={iconBefore}
                onChange={() => setIconBefore(!iconBefore)}
                offColor="#888"
                onColor="#00bfff"
                checkedIcon={false}
                uncheckedIcon={false}
              />
            </label>

            <label>
              Shortkey:
              <Switch
                checked={shortKey}
                onChange={() => setShortkey(!shortKey)}
                offColor="#888"
                onColor="#00bfff"
                checkedIcon={false}
                uncheckedIcon={false}
              />
            </label>
          </div>
        </div>
      )}

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
  );
};

export default InputControlPanel;
