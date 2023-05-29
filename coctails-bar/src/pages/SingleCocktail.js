import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
                id,
                name,
                category,
                glass,
                img,
                info,
                instructions,
                ingredients,
            };
            setCocktail(newCocktail)
            console.log(cocktail.name);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (err) {
        console.log(err)
        setLoading(false)
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchSingleCocktail();
  }, [id]);


  if(loading){
    return <Loading/>
  }
  if(!cocktail){
     return <h2>No Cocktail to display</h2>
  }
  return <section>
    
  </section>
};
