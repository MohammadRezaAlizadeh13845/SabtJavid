import ChatBox from "./ChatBox";

export default {
  title: "components/ChatBox",
  component: ChatBox,
};

export const Login = (args) => <ChatBox {...args}></ChatBox>;

Login.args = {
  text: "click me",
};
