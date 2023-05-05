import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";

const url =
  "https://api.unsplas.com/search/photos?client_id=luqIRSHEGX1hdTA0mByfX0lC8kq5jV1WhtM50UPYR1Y";

export const Gallery = () => {
  const [results, setResults] = useState([]);
  const { searchTerm, isLoading, setIsLoading , setIsError, isError} = useContext(AppContext);

  // console.log(searchTerm)

  const getImages = async () => {
    const res = await fetch(`${url}&query=${searchTerm}`);

    if (res.ok !== true) {
      // setIsError(true)
      setIsLoading(false);
    //   setIsError(true)
      return;
    }
    setIsLoading(true);
    const results = await res.json();
    setResults(results);
    setIsLoading(false);
    // setIsError(false)
    // console.log(results.total);
  };
  useEffect(() => {
    getImages();
  }, [searchTerm]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return (
      <section>
        <h4>There was an Error...</h4>
      </section>
    );
  }
  if (results.total == 0) {
    return <h2 className="result">No results found...</h2>;
  }
  return (
    <section className="image-container">
      {results.results?.map((x) => {
        const url = x?.urls?.regular;
        return <img src={url} key={x.id} />;
      })}
    </section>
  );
};
