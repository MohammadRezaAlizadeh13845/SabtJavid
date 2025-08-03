import Link1 from "./Link1";
const PagesMenu = () => {
  return (
    <div>
      <Link1 route={"/initial"} text={"ورود/ثبت نام"} />
      <Link1 route={"/home"} text={"خانه"} />
    </div>
  );
};

export default PagesMenu;
