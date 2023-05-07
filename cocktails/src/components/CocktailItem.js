import {Link} from "react-router-dom";

export const CocktailItem =({id, image, name, info, glass})=>{
    return(
        <article className="card">
         <div className="img-container">
         <img src={image} alt={name} className="cocktail-img"/>
         </div>
         <div className="cocktail-footer">
            <h3>{name}</h3>
            <h4>{glass}</h4>
            <p>{info}</p>
           <Link to={`/cocktail/${id}`} className="btn-primary">Details</Link>
         </div>
        </article>
    )
}