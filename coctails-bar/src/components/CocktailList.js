import { AppContext } from "../context";
import { useContext } from "react";
import { Loading } from "./Loading";
import { Cocktail } from "./Cocktail";

export const CocktailList = () => {
  const { loading, cocktails } = useContext(AppContext);
   console.log(cocktails)
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2 className="error">No Cocktails match your search criteria</h2>
  }
  return <section className="cocktail-container">
     <h2 className="section-title">Cocktails List</h2>
     <div className="cocktails-list">
     {cocktails.map((x) =>{
      return<Cocktail key={x.id} {...x}/>
     })}
     </div>
  </section>
};
