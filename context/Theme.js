import { createContext, useEffect, useState } from "react";
import localData from '../utils/localData';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localData("theme") || "light");
  // update theme based on localStorage
  useEffect(() => {
    const html = document.documentElement;
    if (theme == "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);



  const toggleTheme = () => {
    const html = document.documentElement;
    setTheme(theme == "dark" ? "light" : "dark");
    console.log(theme);
    if (theme == "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  return (<ThemeContext.Provider value={[theme, toggleTheme]}>
    {children}
  </ThemeContext.Provider>
  );
}