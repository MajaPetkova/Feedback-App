import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar=()=>{
    setIsSidebarOpen(true)
  }
  const closeSidebar=()=>{
    setIsSidebarOpen(false)
  }
  return <AppContext.Provider value={{openSidebar, closeSidebar,isSidebarOpen}}>
    {children}
  </AppContext.Provider>
};

