import SingleResultArticle from "./SingleResultArticle";

export default {
  title: "components/SingleResultArticle",
  component: SingleResultArticle,
};

export const Login = (args) => (
  <SingleResultArticle {...args}></SingleResultArticle>
);
