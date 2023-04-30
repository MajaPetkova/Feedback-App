import { createContext, useReducer, useEffect } from "react";
import { reducer } from "../reducer";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "../actions";
import cartItems from "../data";

export const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((x) => [x.id, x])),
};


export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart =() =>{
    dispatch({type: CLEAR_CART })
  }


  return (
    <AppContext.Provider value={{ ...state, clearCart }}>{children}</AppContext.Provider>
  );
};
