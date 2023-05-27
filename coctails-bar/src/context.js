import { createContext, useState, useEffect } from "react";

const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("du");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchTerm}`);
      const data = await res.json();
      const { drinks } = data;
      console.log(drinks);
      if (drinks) {
        setCocktails(drinks);
      } else {
        setCocktails([]);
      }
      setLoading(false)
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, []);
  return (
    <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
