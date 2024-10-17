import Switch from "react-switch";

export const Checkbox = ({ checked, onChange, text }) => {
  return (
    <label>
      {text}
      <Switch
        checked={checked}
        onChange={onChange}
        offColor="#888"
        onColor="#00bfff"
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </label>
  );
};
