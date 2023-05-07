import { AppContext } from "../context";
import { useContext } from "react";
import { Loading } from "./Loading";
import { CocktailItem } from "./CocktailItem";

export const CocktailList = () => {
  const { loading, cocktails } = useContext(AppContext);
  console.log(cocktails);
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="no-found">no cocktails mached your search criteria</h2>
    );
  }
  return (
    <section className="section-list">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktail-container">{cocktails.map((x) => {
      return <CocktailItem key={x.id} {...x} />
      })}
      </div>
    </section>
  );
};
