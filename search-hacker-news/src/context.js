import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  isLoading: true,
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async () => {
    dispatch({ type: "SET_LOADING" });
  };
  useEffect(() => {
    fetchStories();
  }, []);

  return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>;
};
