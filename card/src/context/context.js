import { createContext, useReducer, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const greeting = "hello";

  return (
    <AppContext.Provider value={{ greeting }}>{children}</AppContext.Provider>
  );
};
