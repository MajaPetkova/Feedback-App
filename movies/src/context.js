import { createContext, useEffect, useState } from "react";

export const API_ENDPOINT = `https://omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("batman");

  const fetchMoves = async () => {
    setIsLoading(true)
    try{
      const res = await fetch(`${API_ENDPOINT}&s=${query}`);
      const data = await res.json();
      if(data.Response === "True"){
        setMovies(data.Search)
        setError({show: false , msg: ""})
      }else{
        setError({show: true , msg: data.Error})
      }
      setIsLoading(false)
    }catch(error){
      console.log(error)
    }
  };
  useEffect(() => {
    fetchMoves()
  }, [query]);

  return <AppContext.Provider value={{movies, isLoading, error, query, setQuery}}>{children}</AppContext.Provider>;
};
