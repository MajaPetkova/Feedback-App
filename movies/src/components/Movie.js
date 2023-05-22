import { useEffect, useState } from "react";
import { API_ENDPOINT } from "../context";
import { Link, useParams } from "react-router-dom";
import { imgUrl } from "./Movies";


export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovie = async () => {
    setLoading(true)
    const res = await fetch(`${API_ENDPOINT}&i=${id}`);
    const data = await res.json();
    if(data.Response=== "False"){
        setError({show:true, msg: data.Error})
        setLoading(false)
    }else{
        setMovie(data);
        setLoading(false)
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  const { Title, Plot, Year, Poster } = movie;
  return (
    <section className="movie-card">
      <img src={Poster !=="N/A" ? Poster : imgUrl} alt="" />
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
