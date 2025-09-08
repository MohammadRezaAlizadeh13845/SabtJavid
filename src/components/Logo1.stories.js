import Logo1 from "./Logo1";

export default {
  title: "components/Logo1",
  component: Logo1,
};

export const Form1 = (args) => <Logo1 {...args} />;
Form1.args = {
  width: "200px",
  height: "100px",
};
