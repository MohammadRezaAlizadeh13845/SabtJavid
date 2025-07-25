import ErrorMessage from "./ErrorMessage";

export default {
  title: "components/ErrorMessage",
  component: ErrorMessage,
};

export const Login = (args) => <ErrorMessage {...args}></ErrorMessage>;

Login.args = {
  text: "click me",
};
