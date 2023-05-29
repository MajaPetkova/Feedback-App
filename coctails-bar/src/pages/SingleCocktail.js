import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../components/Loading";
const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

export const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const fetchSingleCocktail = async () => {
    try {
      const res = await fetch(`${url}${id}`);
      const data = await res.json();
      if (data.drinks) {
        const {
          idDrink: id,
          strDrink: name,
          strCategory: category,
          strGlass: glass,
          strDrinkThumb: img,
          strAlcoholic: info,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
        ];
        const newCocktail = {
          name,
          category,
          glass,
          img,
          info,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
        // console.log(cocktail.name);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchSingleCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2>No Cocktail to display</h2>;
  }
  const { name, category, glass, img, info, instructions, ingredients } =
    cocktail;
  return (
    <section className="single-section">
      <Link to="/" className="btn">Back Home</Link>
      <h2 className="single-title">{name}</h2>
      <div className="drink">
        <img src={img} alt={name} />
        <div className="drink-info">
         <h6><span className="drink-data">name: </span>{name}</h6>  
         <h6><span className="drink-data">category: </span>{category}</h6> 
         <h6><span className="drink-data">glass: </span>{glass}</h6>  
         <h6><span className="drink-data">info: </span>{info}</h6> 
         <h6><span className="drink-data">instructions: </span>{instructions}</h6> 
         <h6><span className="drink-data">ingredients: </span>{ingredients.map((x,index)=> {
            return x ? <span key={index}>{x}</span> : null
         })}</h6> 
        </div>
      </div>
    </section>
  );
};
