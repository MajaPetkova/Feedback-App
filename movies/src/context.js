import { createContext } from "react";

const API_ENDPOINT = `https://omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
