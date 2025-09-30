import Link3 from "./Link3";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBurgerMenuContext } from "../context/BurgerMenuContext";
const ServicesMenu = ({
  width = "300px",
  height = "350px",
  menuOpen,
  setMenuOpen,
  top = "100px",
  right = "300px",
}) => {
  const { setOpen } = useBurgerMenuContext();

  const [hidden, setHidden] = useState(!menuOpen);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  useEffect(() => {
    if (menuOpen) {
      setHidden(false);
    } else {
      const timer = setTimeout(() => setHidden(true), 200);
      return () => clearTimeout(timer);
    }
  }, [menuOpen]);

  const navigator = useNavigate();

  const registrationServices = () => {
    navigator("/registrationarticles");
    setMenuOpen(false);
    setOpen(false);
  };
  const immigrationServices = () => {
    navigator("/immigrationarticles");
    setMenuOpen(false);
    setOpen(false);
  };
  const financialServices = () => {
    navigator("/financialarticles");
    setMenuOpen(false);
    setOpen(false);
  };
  const legalServices = () => {
    navigator("/legalarticles");
    setMenuOpen(false);
    setOpen(false);
  };

  return (
    <div
      style={{ top: top, right: right }}
      className=" absolute z-[10] realtive group h-[350px]"
    >
      <div
        ref={menuRef}
        style={{ width, height }}
        className={`flex flex-col justify-center items-start bg-white p-6 rounded-2xl shadow-2xl dark:shadow-black  max-w-md md:max-w-lg text-right transition-all duration-200 ease-in-out mx-auto mb-5 opacity-0 ${
          menuOpen ? "opacity-100" : "opacity-0 "
        } ${hidden ? "hidden" : "block"} `}
      >
        <div>
          <Link3
            text="خدمات ثبتی"
            size={"20px"}
            onClick={registrationServices}
          />
        </div>
        <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#214EAE] to-transparent"></div>
        <div className=" mt-5">
          {" "}
          <Link3
            text="خدمات مهاجرتی"
            size={"20px"}
            onClick={immigrationServices}
          />
        </div>
        <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#214EAE] to-transparent "></div>
        <div className=" mt-5">
          {" "}
          <Link3 text="خدمات مالی" size={"20px"} onClick={financialServices} />
        </div>
        <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#214EAE] to-transparent"></div>
        <div className=" mt-5">
          <Link3 text="خدمات حقوقی" size={"20px"} onClick={legalServices} />
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;
