import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { HANDLE_PAGE, REMOVE_STORY,  SEARCH_STORY,  SET_LOADING, SET_STORIES } from "./actions";

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

  const removeStory=(id)=>{
   dispatch({type: REMOVE_STORY, payload: id})
  }

  const handleSearch =(query)=>{
   dispatch({type: SEARCH_STORY, payload: query })
  }
  const handlePage = (value) =>{
    dispatch({type : HANDLE_PAGE, payload: value })
   }


  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ ...state, removeStory, handleSearch, handlePage}}>{children}</AppContext.Provider>
  );
};
