import { useState, useEffect } from "react";
const ModeText = ({ fontSize }) => {
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
    <div className="relative" style={{ fontSize }}>
      <p
        className={`absolute inset-0 w-full h-full object-contain text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-[30px] dark:from-blue-300 dark:to-indigo-400 transition-all duration-200 ease-in-out mr-2 mt-1 ${
          isDarkMode ? "opacity-100" : "opacity-0"
        }`}
      >
        حالت تاریک🌙
      </p>
      <p
        className={` inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-[30px] dark:from-blue-300 dark:to-indigo-400 transition-all duration-200 ease-in-out mr-2 mt-1 ${
          isDarkMode ? "opacity-0" : "opacity-100"
        }`}
      >
        حالت روشن☀️
      </p>
    </div>
  );
};

export default ModeText;
