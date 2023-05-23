import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { SET_LOADING, SET_STORIES } from "./actions";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
      //   console.log(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
