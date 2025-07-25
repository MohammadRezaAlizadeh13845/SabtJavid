import Button1 from "./Button1";

export default {
  title: "components/Button1",
  component: Button1,
};

export const Login = (args) => <Button1 {...args}></Button1>;

Login.args = {
  text: "click me",
};
