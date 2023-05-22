import { createContext, useEffect, useState } from "react";
import { useFetch } from "./useFetch";
export const API_ENDPOINT = `https://omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { data: movies, isLoading, error } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ movies, isLoading, error, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
