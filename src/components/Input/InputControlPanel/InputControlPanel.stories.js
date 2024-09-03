import React from "react";
import InputControlPanel from "./InputControlPanel";

export default {
  title: "Components/InputControlPanel",
  component: InputControlPanel,
};

const Template = (args) => <InputControlPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Пропси за замовчуванням, які можуть бути передані в InputControlPanel
  label: "Email",
  labelSize: "sm",
  labelPosition: "top",
  state: "default",
  border: true,
  helperText: "This is a hint text to help user",
  info: "",
  size: "sm",
  alignment: "left",
  iconBefore: "🔍",
  iconAfter: "❌",
  shortkey: "Ctrl+E",
};
