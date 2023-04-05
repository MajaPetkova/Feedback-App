import { createContext, useReducer } from "react";
import { GithubReducer } from "./GithubReducer";

export const GithubContext = createContext();
// const url= "https://api.github.com/users";

export const GithubProvider = ({ children }) => {
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const fetchUsers = async () => {
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();
    // setUsers(data);
    // setLoading(false);
    dispatch({
        type :"GET_USERS",
        payload :data
    })
  };

  return (
    <GithubContext.Provider value={{ 
        users: state.users,
        loading: state.loading, 
        fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};
