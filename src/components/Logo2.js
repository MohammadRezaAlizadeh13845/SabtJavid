import DarkLogo from "../assets/images/favicon-dark1.svg";
import LightLogo from "../assets/images/favicon-light1.svg";
import HoverLogo from "../assets/images/favicon-hover1.svg";
import { useEffect, useState } from "react";
//this one has hovering effect

const Logo2 = ({ width, height }) => {
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
      style={{ width, height, position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={LightLogo}
        alt="navbar"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
          isDarkMode && !isHovered ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={DarkLogo}
        alt="navbar"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
          isDarkMode && !isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src={HoverLogo}
        alt="navbar"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Logo2;
