import ModeToggle from "./ModeToggle";

export default {
  title: "components/ModeToggle",
  component: ModeToggle,
};

const Template = (args) => <ModeToggle {...args} />;
export const Default1 = Template.bind({});
export const Default2 = Template.bind({});
Default2.args = {
  activeTrackColorOnHover: "#6a5c00ff",
  inactiveTrackColorOnHover: "#25c9deff",
  size: "sm",
  inactiveTrackColor: "#e90a0aff",
  activeTrackColor: "#80c11fff",
  inactiveThumbColor: "#b4b4b0ff",
  activeThumbColor: "#f700ffff",
};
