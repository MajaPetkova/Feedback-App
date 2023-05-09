import { createContext, useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { reducer } from "./reducer";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const url1 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const AppContext = createContext();

const initialState = {
    loading: false,
    searchTerm: "",
    cocktails: [],
    // id: 17222
};
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { id} = useParams();
    console.log(id)
    
    const fetchDrinks = async () => {
        dispatch({ type: "LOADING" });
        const res = await fetch(`${url}${state.searchTerm}`);
        const data = await res.json();
        const { drinks } = data;
        dispatch({ type: "FIND_BY_NAME", payload: { drinks } });
    };
    
    const fetchDrinkById =  async() => {
        // dispatch({ type: "LOADING" });
      const res = await fetch(`${url1}${id}`);
      const data = await res.json();
      const { drinks } = data;
      console.log(id);
    console.log(drinks)
console.log()
    dispatch({ type: "FIND_BY_ID", });
  };

  //   const searchDrinks = ({searchTerm})=>{
  //     dispatch({type: "SEARCH", payload : {searchTerm} })
  //   }
  // }
  //   const [loading, setLoading] = useState(true);
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [cocktails, setCocktails] = useState([]);

  //   const fetchDrinks = async () => {
  //     setLoading(true);
  //     try {
  //       const resp = await fetch(`${url}${searchTerm}`);
  //       const data = await resp.json();
  //       const { drinks } = data;
  //     //   console.log(drinks);
  //       if (drinks) {
  //         const newDrinks = drinks.map((x) => {
  //           const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = x;
  //           return {
  //             id: idDrink,
  //             name: strDrink,
  //             image: strDrinkThumb,
  //             info: strAlcoholic,
  //             glass: strGlass,
  //           };
  //         });
  //         setCocktails(newDrinks);
  //       } else {
  //         setCocktails([]);
  //       }
  //       setLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //       setLoading(false);
  //     }
  //   };

  useEffect(() => {
    fetchDrinks();
    fetchDrinkById()
  }, [state.searchTerm]);

//   useEffect(() => {

//   }, []);

  return (
    <AppContext.Provider
      //   value={{ loading, searchTerm, cocktails, setSearchTerm }}
      value={{ ...state,  }}
    >
      {children}
    </AppContext.Provider>
  );
};
