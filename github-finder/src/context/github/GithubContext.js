import { createContext, useReducer } from "react";
import { GithubReducer } from "./GithubReducer";

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // const clearUsers = () => {
  //   dispatch({
  //     type: "CLEAR_USERS",
  //   });
  // };
  // const setLoading = () => {
  //   dispatch({
  //     type: "SET_LOADING",
  //   });
  // };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
