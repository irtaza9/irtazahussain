import React, { useContext, useEffect } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { ThemeContext } from "../../context/ThemeContext";

const Themetoggle = () => {
  const { theme, themeToggle } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="nav_ac" onClick={themeToggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
