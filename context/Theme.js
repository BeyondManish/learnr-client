import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  // TODO: Fix the dark theme toggle in reload 
  useEffect(() => {
    setTheme(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");
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
    setTheme(theme == "light" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  };

  return (<ThemeContext.Provider value={[theme, toggleTheme]}>
    {children}
  </ThemeContext.Provider>
  );
}