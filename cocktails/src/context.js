import {createContext} from "react";


export const AppContext = createContext();

export const AppProvider =({children}) =>{
    // const greeting = "hello"
    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}