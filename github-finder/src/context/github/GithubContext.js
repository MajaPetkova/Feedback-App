import { createContext, useReducer } from "react";
import { GithubReducer } from "./GithubReducer";

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Get initials Users (testing purposes)
  const searchUsers = async (text) => {
    setLoading();
    const params= new URLSearchParams({
        q:text
    })
    const res = await fetch(`https://api.github.com/search/users?${params}`);
    const {items} = await res.json();
    // setUsers(data);
    // setLoading(false);
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };
  const clearUsers =() =>{
    dispatch({
       type: "CLEAR_USERS" 
    })
  }
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
        searchUsers,
        clearUsers
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
