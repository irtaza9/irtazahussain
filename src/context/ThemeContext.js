import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const themeToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        themeToggle,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
