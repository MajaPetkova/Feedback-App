import { useEffect, useState } from "react";
import { API_ENDPOINT } from "../context";
import { Link, useParams } from "react-router-dom";
import { imgUrl } from "./Movies";
import { useFetch } from "../useFetch";

export const Movie = () => {
  const { id } = useParams();
//   const [movie, setMovie] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState({ show: false, msg: "" });

  const {isLoading, error, data:movie} = useFetch(`&i=${id}`);
 
  //   const fetchMovie = async () => {
  //     setLoading(true)
  //     const res = await fetch(`${API_ENDPOINT}&i=${id}`);
  //     const data = await res.json();
  //     if(data.Response=== "False"){
  //         setError({show:true, msg: data.Error})
  //         setLoading(false)
  //     }else{
  //         setMovie(data);
  //         setLoading(false)
  //     }
  //   };

  //   useEffect(() => {
  //     fetchMovie();
  //   }, [id]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  if (error.show) {
    return <p className="error">{error.msg}</p>;
  }
  const { Title, Plot, Year, Poster } = movie;
  return (
    <section className="movie-card">
      <img src={Poster !== "N/A" ? Poster : imgUrl} alt={Title} />
      <div className="movie-card-info">
        <h3>Title: {Title}</h3>
        <p className="desc">{Plot}</p>
        <h4>Year: {Year}</h4>
        <Link to="/" className="btn">
          Back to Movies
        </Link>
      </div>
    </section>
  );
};
