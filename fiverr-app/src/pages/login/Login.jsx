import React, { useState } from "react";
import "./login.scss";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username: username, password: password };
    // console.log(userData)
    try {
      fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      // const data = await res.json();
      // console.log(res);
    } catch (err) {
      setError(err);
      // console.log(err);
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
      </form>
    </div>
  );
};
