import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const DarkThemeContext = createContext();

export function DarkThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage(
    "darkThemeMode",
    window.matchMedia("(prefers-colo-scheme: dark)").matches || false
  );
  useEffect(() => {
    if (darkMode === false) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((pre) => !pre);
  return (
    <DarkThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkThemeContext.Provider>
  );
}

export function useDarkMode() {
  if (!DarkThemeContext)
    throw Error("dark theme context usage is out of dark theme provide. ");
  return useContext(DarkThemeContext);
}
