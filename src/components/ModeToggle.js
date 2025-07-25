import { useContext } from "react";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { ThemeContext } from "../context/ThemeContext";
const ModeToggle = ({
  activeTrackColorOnHover = "#334155",
  inactiveTrackColorOnHover = "#1e293b",
  size = "sm",
  inactiveTrackColor = "#ffffffff",
  activeTrackColor = "#006affff",
  inactiveThumbColor = "#0062ffff",
  activeThumbColor = "#ffffffff",
}) => {
  const contextValue = useContext(ThemeContext);
  const { mode, setMode } = contextValue;
  return (
    <div>
      <DarkModeToggle
        activeTrackColorOnHover={activeTrackColorOnHover}
        inactiveTrackColorOnHover={inactiveTrackColorOnHover}
        mode={mode}
        size={size}
        inactiveTrackColor={inactiveTrackColor}
        activeTrackColor={activeTrackColor}
        inactiveThumbColor={inactiveThumbColor}
        activeThumbColor={activeThumbColor}
        onChange={(mode) => setMode(mode)}
      />
    </div>
  );
};

export default ModeToggle;
