import { createContext, useReducer } from "react";
import { GithubReducer } from "./GithubReducer";

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //get search users
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const res = await fetch(`https://api.github.com/search/users?${params}`);
    const { items } = await res.json();
    // setUsers(data);
    // setLoading(false);
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };
  //get single user
  const getUser = async (login) => {
    setLoading();

    const res = await fetch(`https://api.github.com/users/${login}`);
    
    if (res.status === 404) {
      window.location = "/not-found";
    } else {
      const data = await res.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
