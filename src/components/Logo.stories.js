import Logo from "./Logo";

export default {
  title: "components/Logo",
  component: Logo,
};

export const Form1 = (args) => <Logo {...args} />;
Form1.args = {
  width: "200px",
  height: "100px",
};
