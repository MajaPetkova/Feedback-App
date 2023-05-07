import {createContext, useState} from "react";

const url ="http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

export const AppContext = createContext();

export const AppProvider =({children}) =>{
const [loading, setLoading] = useState(true);
const [searchTerm, setSearchTerm] = useState("a");
const [cocktails, setCocktails] = useState([]);




    return(
        <AppContext.Provider value={{loading, searchTerm, cocktails, setSearchTerm}}>
            {children}
        </AppContext.Provider>
    )
}