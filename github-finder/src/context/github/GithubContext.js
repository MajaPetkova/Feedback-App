import { createContext, useReducer } from "react";
import { GithubReducer } from "./GithubReducer";

export const GithubContext = createContext();
// const url= "https://api.github.com/users";

export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Get initials Users (testing purposes)
  const fetchUsers = async () => {
    setLoading();
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();
    // setUsers(data);
    // setLoading(false);
    dispatch({
      type: "GET_USERS",
      payload: data,
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
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
