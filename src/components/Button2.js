import LightButton from "../assets/images/navbarlight.svg";
import DarkButton from "../assets/images/navbardark.svg";
import HoverButton from "../assets/images/navbarhover.svg";
import { useEffect, useState } from "react";
const Button2 = ({ onClick, width = "120px", height = "75px" }) => {
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
    <div>
      <button
        style={{ width, height, position: "absolute" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="left-5 top-0"
      >
        <img
          src={LightButton}
          alt="navbar"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            isDarkMode && !isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={DarkButton}
          alt="navbar"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            isDarkMode && !isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={HoverButton}
          alt="navbar"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </button>
    </div>
  );
};

export default Button2;
