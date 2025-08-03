import Link1 from "./Link1";

export default {
  title: "components/Link1",
  component: Link1,
};

export const Form1 = (args) => <Link1 {...args} />;

Form1.args = {
  size: "2xl",
};
