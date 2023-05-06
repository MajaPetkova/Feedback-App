import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const getInitialDarkMode = () =>{
  const prefersDarkMode= window.matchMedia("(prefers-color-scheme:dark)").matches;
  console.log(prefersDarkMode);
  return prefersDarkMode;
}


export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode);
  const [searchTerm, setSearchTerm] = useState("monkey");
  const[isLoading, setIsLoading] = useState(false)
  const[isError, setIsError] = useState(false);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme");
  };
  
  useEffect(()=>{
    document.body.classList.toggle("dark-theme", isDarkTheme)
  }, [])
  
  return (
    <AppContext.Provider value={{ toggleDarkTheme, isDarkTheme, searchTerm, setSearchTerm, isLoading, setIsLoading, isError, setIsError}}>
      {children}
    </AppContext.Provider>
  );
};
