import Link3 from "./Link3";
import Logo1 from "./Logo1";
import Button2 from "./Button2";
import BurgerMenuIcon from "./BurgerMenuIcon";
import BurgerMenu from "./BurgerMenu";
import { useEffect, useRef, useState } from "react";
import { useBurgerMenuContext } from "../context/BurgerMenuContext";
import { useNavigate } from "react-router-dom";
import ServicesMenu from "./ServicesMenu";

const NavBar = () => {
  const menuRef = useRef(null);
  const { setOpen } = useBurgerMenuContext();

  const [servicesMenu, setServicesMenu] = useState(false);

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
  });

  const navigator = useNavigate();

  const articlesClick = () => {
    navigator("/articles");
  };
  const homeClick = () => {
    navigator("/SabtJavid/");
  };
  const aboutUsClick = () => {
    navigator("/aboutus");
  };
  const contactUsClick = () => {
    navigator("/contactus");
  };
  return (
    <div className="flex flex-row items-center w-full relative">
      <div className="uplg:mr-5 mx-auto uplg:mx-0 translate-x-[35px] uplg:translate-x-0">
        <div className="mb-5">
          <Logo1 width={"150px"} height={"150px"} />
        </div>
      </div>
      <div className="flex flex-row space-x-6 mr-5 hidden uplg:flex">
        <div className="ml-6">
          <Link3 text="صفحه اصلی" size={"20px"} onClick={homeClick} />
        </div>
        <div
          className="h-[30px]"
          onMouseEnter={() => setServicesMenu(true)}
          onMouseLeave={() => setServicesMenu(false)}
          onClick={() => setServicesMenu(true)}
          onBlur={() => setServicesMenu(false)}
        >
          <Link3 text="خدمات" size={"20px"} />
          <ServicesMenu menuOpen={servicesMenu} setMenuOpen={setServicesMenu} />
        </div>
        <Link3 text="مقالات" size={"20px"} onClick={articlesClick} />
        <Link3 text="درباره ما" size={"20px"} onClick={aboutUsClick} />
        <Link3 text="تماس با ما" size={"20px"} onClick={contactUsClick} />
      </div>
      <div ref={menuRef} className="absolute flex uplg:hidden top-10 right-3">
        <BurgerMenuIcon />
        <div className="absolute top-[50px] z-[999]">
          <BurgerMenu />
        </div>
      </div>

      <div>
        <Button2 />
      </div>
    </div>
  );
};

export default NavBar;
