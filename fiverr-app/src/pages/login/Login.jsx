import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import axios from "axios";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const userData = { username:username, password: password };
    // console.log(userData)
    try {
      // const res = await Fetch("http://localhost:8000/api/auth/login", {
      //   method: "POST",
      //   mode: "cors",
      //   credentials: "include",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ username, password }),
      // });
      const res = await axios.post("http://localhost:8000/api/auth/login", {
        username,
        password,
      });
      console.log(res.data);
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/")
    } catch (err) {
      setError(err.response.data)
      // console.log(err.response.data);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          placeholder="johndoe"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {/* {error && error} */}
      </form>
    </div>
  );
};
