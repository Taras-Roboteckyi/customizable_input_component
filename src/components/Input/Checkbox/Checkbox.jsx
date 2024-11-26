import Switch from "react-switch";

export const Checkbox = ({ checked, onChange, text }) => {
  return (
    <div className=" flex  justify-items-start mb-3">
      <label className="w-40 text-white mr-2">{text}</label>
      <Switch
        className="w-40"
        checked={checked}
        onChange={onChange}
        offColor="#888"
        onColor="#00bfff"
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </div>
  );
};
