import React, { useState } from "react";
import "./register.scss";

export const Register = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    image: "",
    country: "",
    isSeller: false,
    desc: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

    const handleSeller= (e)=>{
      setUser(prev => {
        return{
          ...prev, isSeller: e.target.checked
        }
      })
    }
    console.log(user)
  return (
    <div className="register">
      <form>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="password"
            placeholder="johndoe@gmail.com"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input type="password" name="password" onChange={handleChange} />
          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Country</label>
          <input
            type="text"
            name="country"
            placeholder="USA"
            onChange={handleChange}
          />
          <button>Register</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label htmlFor="">Description</label>
          <textarea
            name="desc"
            id=""
            cols="30"
            rows="10"
            placeholder="A short description of yourself"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};
