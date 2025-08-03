import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem("mode");
    return saved !== null ? JSON.parse(saved) : "light";
  });

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [mode]);
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
