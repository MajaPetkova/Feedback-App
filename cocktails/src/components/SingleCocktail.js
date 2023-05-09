import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Loading } from "./Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const SingleCocktail = () => {

  // const { id } = useParams();
  // console.log(id)
  // const [loading, setLoading] = useState(false);
  // const [cocktail, setCocktail] = useState(null);

  // const showCocktail = async () => {
  //   try {
  //     const resp = await fetch(`${url}${id}`);
  //     const data = await resp.json();
  //     console.log (data)
  //     if (data.drinks) {
  //       const {
  //         strDrink: cocktailName,
  //         strDrinkThumb: image,
  //         strAlcoholic: info,
  //         strCategory: category,
  //         strGlass: glass,
  //         strInstructions: instructions,
  //         strIngredient1,
  //         strIngredient2,
  //         strIngredient3,
  //         strIngredient4,
  //         strIngredient5,
  //       } = data.drinks[0];

  //       const ingredients = [
  //         strIngredient1,
  //         strIngredient2,
  //         strIngredient3,
  //         strIngredient4,
  //         strIngredient5,
  //       ];
  //       const newCocktail = {
  //         cocktailName,
  //         image,
  //         info,
  //         category,
  //         glass,
  //         instructions,
  //         ingredients,
  //       };
  //       setCocktail(newCocktail);
  //     } else {
  //       setCocktail(null);
  //     }
      
  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   // setLoading(true);
  //   showCocktail();
  // }, [id]);
  // // useEffect(()=>{
  // //   fetchDrinkById(id)
  // // }, [])

  // if (loading) {
  //   return <Loading />;
  // }
  // if (!cocktail) {
  //   return <h2>no cocktail to display</h2>;
  // }
  // const {
  //   cocktailName,
  //   image,
  //   info,
  //   category,
  //   glass,
  //   instructions,
  //   ingredients,
  // } = cocktail;


//   return <section className="single-cocktail">
//     <Link to="/" className="btn-primary">back Home</Link>
//      <h2 className="titleCocktail">{cocktailName}</h2>
//      <div className="drink">
//       <img src={image} alt={cocktailName}/>
//    <div className="info">
//      <div className="drink-info">
//         <p><span>name:</span> {cocktailName}</p>
//      </div>
//      <div className="drink-info">
//         <p><span>category:</span> {category}</p>
//      </div>
//      <div className="drink-info">
//         <p><span>info:</span> {info}</p>
//      </div>
//      <div className="drink-info">
//         <p><span>glass:</span> {glass}</p>
//      </div>
//      <div className="drink-info">
//         <p><span>instructions:</span> {instructions}</p>
//      </div>
//      <div className="drink-info">
//      <p><span>ingredients:</span> {ingredients.map((x, index)=>{
//             return x ? <span key={index} className="para">{x}</span> : null
//         })}</p> 
//      </div>
//      </div>
//      </div>
//   </section>;
  };
