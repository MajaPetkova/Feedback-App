import { useState, useEffect } from "react";
export const API_ENDPOINT = `https://omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  const fetchMoves = async (url) => {
    setIsLoading(true)
    try{
      const res = await fetch(url);
      const data = await res.json();
      if(data.Response === "True"){
        // console.log(data)
        setData(data.Search || data)
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
    fetchMoves(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams]);

  return {isLoading, error, data};
};
