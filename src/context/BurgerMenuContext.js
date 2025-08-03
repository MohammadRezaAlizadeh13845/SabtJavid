import { createContext, useContext, useState } from "react";

export const BurgerMenuContext = createContext();

export const BurgerMenuProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <BurgerMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </BurgerMenuContext.Provider>
  );
};

export const useBurgerMenuContext = () => useContext(BurgerMenuContext);
