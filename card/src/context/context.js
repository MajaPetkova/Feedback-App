import { createContext, useReducer, useEffect } from "react";
import { reducer } from "../reducer";
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from "../actions";
import  cartItems  from "../data";

export const AppContext = createContext();

const initialState ={
    loading:false,
    cart:new Map(cartItems.map(x => [x.id, x]))
    
}


export const AppProvider = ({ children }) => {
//  console.log(cart)
const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{...state }}>{children}</AppContext.Provider>
  );
};
