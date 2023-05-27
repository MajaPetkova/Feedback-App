import {Link} from "react-router-dom";

export const Cocktail = ({ ...x }) => {
  const { img, name, id, info, glass } = x;

  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="info-container">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <footer>
        <Link to={`/cocktail/${id}`} className="btn btn-more">Details</Link>
        </footer>
      </div>
    </article>
  );
};
