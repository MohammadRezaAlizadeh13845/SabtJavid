import Footer from "./Footer";

export default {
  title: "components/Footer",
  component: Footer,
};

export const Login = (args) => <Footer {...args}></Footer>;

Login.args = {
  text: "click me",
};
