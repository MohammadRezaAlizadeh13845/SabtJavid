import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CloseMenu = ({ setOpen }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return null;
};

export default CloseMenu;
