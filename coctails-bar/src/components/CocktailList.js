import { AppContext } from "../context";
import { useContext } from "react";
import { Loading } from "./Loading";

export const CocktailList = () => {
  const { loading, cocktails } = useContext(AppContext);

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2 className="error">No Cocktails match your search criteria</h2>
  }
  return <div>

  </div>;
};
