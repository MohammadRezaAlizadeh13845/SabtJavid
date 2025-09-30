import ServicesMenu from "./ServicesMenu";

export default {
  title: "components/ServicesMenu",
  component: ServicesMenu,
};

export const Login = (args) => <ServicesMenu {...args}></ServicesMenu>;

Login.args = {
  text: "click me",
};
