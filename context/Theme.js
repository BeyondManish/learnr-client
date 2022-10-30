import { createContext, useEffect, useState } from "react";
import localData from '../utils/localData';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localData("theme") || "light");
  // update theme based on localStorage
  useEffect(() => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
    const html = document.documentElement;
    if (theme == "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, []);



  const toggleTheme = () => {
    const html = document.documentElement;
    if (theme == "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    setTheme(theme == "dark" ? "light" : "dark");
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  return (<ThemeContext.Provider value={[theme, toggleTheme]}>
    {children}
  </ThemeContext.Provider>
  );
}