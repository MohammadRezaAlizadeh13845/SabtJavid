import { ThemeContext } from "./ThemeContext";
import { AuthContext } from "./AuthContext";
import { BurgerMenuContext } from "./BurgerMenuContext";
import { useState } from "react";

const StoryProviders = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [isSignUp, setIsSignUp] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <AuthContext.Provider value={{ isSignUp, setIsSignUp }}>
        <BurgerMenuContext.Provider value={{ open, setOpen }}>
          {children}
        </BurgerMenuContext.Provider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default StoryProviders;
