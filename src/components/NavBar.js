import Link3 from "./Link3";
import Logo1 from "./Logo1";
import Button2 from "./Button2";
import ModeToggle from "./ModeToggle";
import ModeText from "./ModeText";
import BurgerMenuIcon from "./BurgerMenuIcon";
import BurgerMenu from "./BurgerMenu";
import { useEffect, useRef } from "react";
import { useBurgerMenuContext } from "../context/BurgerMenuContext";

const NavBar = () => {
  const menuRef = useRef(null);
  const { open, setOpen } = useBurgerMenuContext();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex flex-row items-center w-full relative">
      <div className="uplg:mr-5 mx-auto uplg:mx-0 translate-x-[35px] uplg:translate-x-0">
        <Logo1 width={"150px"} height={"75px"} />
      </div>
      <div className="flex flex-row space-x-6 mr-5 hidden uplg:flex">
        <div className="ml-6">
          <Link3 text="مشاوره روانشناسی" size={"20px"} />
        </div>
        <Link3 text="مشاوره روانپزشکی" size={"20px"} />
        <Link3 text="مجله سلامت" size={"20px"} />
        <Link3 text="درباره ما" size={"20px"} />
      </div>
      <div ref={menuRef} className="absolute flex uplg:hidden top-3 right-3">
        <BurgerMenuIcon />
        <div className="absolute top-[50px] z-[999]">
          <BurgerMenu />
        </div>
      </div>
      <div className="uplg:flex uplg:flex-row hidden bg-black ">
        <div className="absolute top-6">
          <ModeToggle />
        </div>
        <div className="absolute top-6 mr-[50px] dark:top-5">
          <ModeText />
        </div>
      </div>

      <div>
        <Button2 />
      </div>
    </div>
  );
};

export default NavBar;
