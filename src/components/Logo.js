import DarkLogo from "../assets/images/favicon-dark1.svg";
import LightLogo from "../assets/images/favicon-light1.svg";
import { useEffect, useState } from "react";
import ModeToggle from "../components/ModeToggle";

const Logo = ({ width, height }) => {
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
  return (
    <div className={`relative w-[${width}] h-[${height}] `}>
      <img
        src={LightLogo}
        alt="Light Logo"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
          isDarkMode ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={DarkLogo}
        alt="Dark Logo"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
          isDarkMode ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Logo;
