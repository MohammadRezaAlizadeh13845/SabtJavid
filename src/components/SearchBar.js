import { useState, useEffect } from "react";
import LightSearch from "../assets/images/search-light.svg";
import DarkSearch from "../assets/images/search-dark.svg";
import HoverSearch from "../assets/images/search-hover.svg";
import Logo2 from "./Logo2";

const SearchBar = () => {
  const [open, setOpen] = useState(false);

  const [searched, setSearched] = useState(false);

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
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div>
      <div
        className={`relative flex flex-row justify-center items-start bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl dark:shadow-black max-w-md md:max-w-[60%] text-right transition-all duration-200 ease-in-out mx-auto mb-1 border-2 border-[#b7bcc5] hover:border-gray-500 h-[50px] ${
          isFocused ? "border-gray-500" : "border-[#b7bcc5]"
        }`}
      >
        <div>
          <button
            type="submit"
            onClick={null}
            style={{ width: "40px", height: "40px", position: "absolute" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="left-3 top-1"
          >
            <img
              src={LightSearch}
              alt="navbar"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
                isDarkMode && !isHovered ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src={DarkSearch}
              alt="navbar"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
                isDarkMode && !isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src={HoverSearch}
              alt="navbar"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        </div>
        <div className="absolute top-2 right-5">
          <input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="dark:bg-slate-800 text-xl placeholder-gray-500 placeholder:text-[18px] w-[250px] transition-all duration-200 md:w-[350px] focus:outline-none focus:ring-0"
            placeholder="جست و جو"
          ></input>
        </div>
      </div>
      <div
        className={` flex flex-col justify-center items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl dark:shadow-black  max-w-md md:max-w-[60%] text-right transition-all duration-200 ease-in-out mx-auto mb-5 opacity-100 ${
          searched ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
};

export default SearchBar;
