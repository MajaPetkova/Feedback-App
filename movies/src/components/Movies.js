import { useContext } from "react";
import { AppContext } from "../context";
import {Link} from "react-router-dom";

export const imgUrl= "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg";


export const Movies = () => {
  const { movies, isLoading } = useContext(AppContext);
//  const {id} = useParams()
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="movie-container">
      {movies.map((x) => {
        return (
          <article className="movie-item" key={x.imdbID}>
            <img src={x.Poster === "N/A" ? imgUrl : x.Poster} alt={x.Title} />
            <div className="info">
             <Link to={`/movies/${x.imdbID}`}> <h4>{x.Title}</h4></Link>
              <p>{x.Year}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
