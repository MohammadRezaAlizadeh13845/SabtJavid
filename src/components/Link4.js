import { useState } from "react";
const Link4 = ({
  text = "سلام",
  size = "30px",
  onClick,
  color = "darkBlue",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <button
        style={{ fontSize: size }}
        href="./"
        className={`text-white hover:text-cherryRed transition-all duration-200  cursor-pointer whitespace-nowrap`}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onClick={onClick}
      >
        {text}
      </button>

      <div
        className={`bg-cherryRed rounded-2xl h-[3px] w-full mt-1 transition-all duration-200 opacity-0 mb-5 uplg:-mb-1 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
};

export default Link4;
