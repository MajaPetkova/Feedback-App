import { useState, useContext } from "react";
import { GithubContext } from "../../context/github/GithubContext";
import { AlertContext } from "../../context/alert/AlertContext";
import { Alert } from "../layout/Alert";

export const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers} = useContext(GithubContext);
  const {setAlert}= useContext(AlertContext)

  const handleChange = (ev) => {
    setText(ev.target.value);
  };
  const submitHandler = (ev) => {
    ev.preventDefault();
    if (text === "") {
     setAlert("Please enter something","error" )
    } else {
      searchUsers(text)
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
      {users.length > 0 && <button className="btn-clear" onClick={clearUsers}>Clear</button>}
      
    </div>
  );
};
