import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme");
  };
  return (
    <AppContext.Provider value={{ toggleDarkTheme, isDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};
