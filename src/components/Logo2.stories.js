import Logo2 from "./Logo2";

export default {
  title: "components/Logo2",
  component: Logo2,
};

export const Form1 = (args) => <Logo2 {...args} />;
Form1.args = {
  width: "200px",
  height: "100px",
};
