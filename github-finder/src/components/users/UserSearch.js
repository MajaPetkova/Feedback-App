import { useState, useContext } from "react";
import { GithubContext } from "../../context/github/GithubContext";
import { AlertContext } from "../../context/alert/AlertContext";
import { Alert } from "../layout/Alert";
import { searchUsers } from "../../context/github/GithubActions";

export const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, dispatch} = useContext(GithubContext);
  const {setAlert}= useContext(AlertContext)

  const handleChange = (ev) => {
    setText(ev.target.value);
  };
  const submitHandler = async(ev) => {
    ev.preventDefault();
    if (text === "") {
     setAlert("Please enter something","error" )
    } else {
      dispatch({type:'SET_LOADING'})
     const users = await searchUsers(text);
     dispatch({type: 'GET_USERS', payload:users})
      setText("");
    }
  };
  return (
    <div className="search">
      <div className="form">
        <form onSubmit={submitHandler} className="form-control">
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={text}
            />
          <button className="btn-search">Go</button>
        </form>
            <Alert/>
      </div>
      {users.length > 0 && <button className="btn-clear" onClick={()=>dispatch({type: 'CLEAR_USERS'})}>Clear</button>}
      
    </div>
  );
};
