import LightButton from "../assets/images/icons/navbarlight.svg";
import HoverButton from "../assets/images/icons/navbarhover.svg";
import { useState } from "react";
const Button2 = ({ onClick, width = "120px", height = "75px" }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <button
        style={{ width, height, position: "absolute" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="left-5 top-8"
        onClick={() => alert("این بخش در حال تکمیل است.")}
      >
        <img
          src={LightButton}
          alt="navbar"
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
            !isHovered ? "opacity-100" : "opacity-0"
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
