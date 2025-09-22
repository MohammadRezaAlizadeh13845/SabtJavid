import { useEffect, useRef, useState } from "react";
import BurgerHover from "../assets/images/burger-hover.svg";
import BurgerLight from "../assets/images/burger-light.svg";
import BurgerDark from "../assets/images/burger-dark.svg";
import { useBurgerMenuContext } from "../context/BurgerMenuContext";

const BurgerMenu = ({ width = "40px", height = "35px" }) => {
  const { open, setOpen } = useBurgerMenuContext();

  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    if (open) {
      setClosed(() => ({ moved: false, rotated: false }));
      setOpened(() => ({ rotated: false, moved: true }));
    } else {
      setOpened(() => ({ rotated: false, moved: false }));
      setClosed(() => ({ moved: false, rotated: true }));
    }
  }, [open]);

  const [opened, setOpened] = useState({
    moved: false,
    rotated: false,
  });

  useEffect(() => {
    if (opened.moved) {
      const timer = setTimeout(() => {
        setOpened((prev) => ({
          ...prev,
          rotated: true,
        }));
        setClosed(() => ({ rotated: false, moved: false }));
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [opened.moved]);

  const [closed, setClosed] = useState({ moved: false, rotated: false });

  useEffect(() => {
    if (closed.rotated) {
      const timer = setTimeout(() => {
        setClosed((prev) => ({
          ...prev,
          moved: true,
        }));
        setOpened(() => ({
          moved: false,
          rotated: false,
        }));
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [closed.rotated]);

  const [isDarkMode, setIsDarkMode] = useState(
    document.body.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains("dark"));
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative "
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div
        id="topbar"
        style={{ width, height, position: "absolute" }}
        className={`top-0 transition-transform duration-200 ease-int-out ${
          opened.moved ? "translate-y-[10px]" : ""
        } 
        ${opened.rotated ? "-rotate-45" : ""} ${
          closed.rotated ? "rotate-0 translate-y-[10px]" : ""
        }${closed.moved ? "translate-y-0" : ""} `}
      >
        <img
          src={BurgerLight}
          alt="navbar"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            isDarkMode && !isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={BurgerDark}
          alt="navbar"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            isDarkMode && !isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={BurgerHover}
          alt="navbar"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div
        id="middlebar"
        style={{ width, height, position: "absolute" }}
        className={` top-[10px] transition-opacity duration-200 ${
          opened.moved ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={BurgerLight}
          alt="navbar"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            isDarkMode && !isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={BurgerDark}
          alt="navbar"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            isDarkMode && !isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={BurgerHover}
          alt="navbar"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div
        id="bottombar"
        style={{ width, height, position: "absolute" }}
        className={` top-[20px] transition-transform duration-200 ease-int-out ${
          opened.moved ? "translate-y-[-10px]" : ""
        }
        ${opened.rotated ? "rotate-45" : ""} ${
          closed.rotated ? "rotate-0 translate-y-[-10px]" : ""
        }${closed.moved ? "translate-y-0" : ""} `}
      >
        <img
          src={BurgerLight}
          alt="navbar"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            isDarkMode && !isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={BurgerDark}
          alt="navbar"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            isDarkMode && !isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={BurgerHover}
          alt="navbar"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default BurgerMenu;
