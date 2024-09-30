import React, { useState } from "react";
import Switch from "react-switch";

import InputGroup from "../InputGroup/InputGroup";

const InputControlPanel = () => {
  const [labelSize, setLabelSize] = useState("sm");
  const [state, setState] = useState("default");
  const [labelPosition, setLabelPosition] = useState("top");
  const [border, setBorder] = useState(true);
  const [helperText, setHelperText] = useState("");
  const [label, setLabel] = useState("Email");
  const [info, setInfo] = useState("");
  const [size, setSize] = useState("sm");
  const [alignment, setAlignment] = useState("left");
  const [iconAfter, setIconAfter] = useState(null);
  const [iconBefore, setIconBefore] = useState(null);
  const [shortkey, setShortkey] = useState("");

  //useState чекбокса
  const [checkedUserText, setCheckedUserText] = useState(false);

  const handleChangeUserText = (nextChecked) => {
    setCheckedUserText(nextChecked);
  };

  return (
    <div>
      <div className="control-panel">
        <label>
          Label size:
          <select
            value={labelSize}
            onChange={(e) => setLabelSize(e.target.value)}
          >
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </label>

        <label>
          State:
          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="default">Default</option>
            <option value="error">Error</option>
            <option value="success">Success</option>
          </select>
        </label>

        <label>
          User text:
          <Switch
            checked={checkedUserText}
            onChange={handleChangeUserText}
            offColor="#888"
            onColor="#00bfff"
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </label>

        <label>
          Label position:
          <select
            value={labelPosition}
            onChange={(e) => setLabelPosition(e.target.value)}
          >
            <option value="top">Top</option>
            <option value="left">Left</option>
          </select>
        </label>

        <label>
          Border:
          <Switch
            checked={border}
            onChange={() => setBorder(!border)}
            offColor="#888"
            onColor="#00bfff"
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </label>

        <label>
          Helper text:
          <input
            type="text"
            value={helperText}
            onChange={(e) => setHelperText(e.target.value)}
          />
          <Switch
            checked={helperText}
            onChange={(e) => setHelperText(e.target.value)}
            offColor="#888"
            onColor="#00bfff"
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </label>

        <label>
          Label:
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </label>

        <label>
          Info:
          <input
            type="text"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </label>

        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </label>

        <label>
          Alignment:
          <select
            value={alignment}
            onChange={(e) => setAlignment(e.target.value)}
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </label>

        <label>
          Icon after:
          <input
            type="text"
            value={iconAfter}
            onChange={(e) => setIconAfter(e.target.value)}
          />
        </label>

        <label>
          Icon before:
          <input
            type="text"
            value={iconBefore}
            onChange={(e) => setIconBefore(e.target.value)}
          />
        </label>

        <label>
          Shortkey:
          <input
            type="text"
            value={shortkey}
            onChange={(e) => setShortkey(e.target.value)}
          />
        </label>
      </div>

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
        shortkey={shortkey}
        userText={checkedUserText}
      />
    </div>
  );
};

export default InputControlPanel;
