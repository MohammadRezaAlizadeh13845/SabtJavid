import Link3 from "./Link3";
import { useBurgerMenuContext } from "../context/BurgerMenuContext";
import ModeToggle from "./ModeToggle";
import ModeText from "./ModeText";
const BurgerMenu = ({ width = "350px", height = "450px" }) => {
  const { open } = useBurgerMenuContext();
  return (
    <div>
      <div
        style={{ width, height }}
        className={`flex flex-col justify-center items-start bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl dark:shadow-black  max-w-md md:max-w-lg text-right transition-all duration-200 ease-in-out mx-auto mb-5 opacity-0 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link3 text="مشاوره روانشناسی" size={"20px"} />

        <div className="bg-gradient-to-r from-blue-400 to-indigo-700 rounded-2xl h-[5px] w-full mt-5 mb-5 dark:to-indigo-500 opacity-50"></div>

        <Link3 text="مشاوره روانپزشکی" size={"20px"} />
        <div className="bg-gradient-to-r from-blue-400 to-indigo-700 rounded-2xl h-[5px] w-full mt-5 mb-5 dark:to-indigo-500 opacity-50"></div>
        <Link3 text="مجله سلامت" size={"20px"} />
        <div className="bg-gradient-to-r from-blue-400 to-indigo-700 rounded-2xl h-[5px] w-full mt-5 mb-5 dark:to-indigo-500 opacity-50"></div>
        <Link3 text="درباره ما" size={"20px"} />
        <div className="bg-gradient-to-r from-blue-400 to-indigo-700 rounded-2xl h-[5px] w-full mt-5 mb-5 dark:to-indigo-500 opacity-50"></div>
        <div className="flex flex-row">
          <ModeToggle />
          <ModeText />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
