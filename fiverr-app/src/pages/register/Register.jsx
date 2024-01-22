import React from "react";
import "./register.scss";

export const Register = () => {
  return (
    <div className="register">
      <form>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input type="text" name="username" placeholder="johndoe" />
          <label htmlFor="">Email</label>
          <input type="email" name="password" placeholder="johndoe@gmail.com" />
          <label htmlFor="">Password</label>
          <input type="password" name="password" />
          <label htmlFor="">Profile Picture</label>
          <input type="file" />
          <label htmlFor="">Country</label>
          <input type="text" name="country" placeholder="USA" />
          <button>Register</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <label htmlFor="">Phone Number</label>
            <input type="text" name="phone" placeholder="+1 234 567 89" />
            <label htmlFor="">Description</label><textarea name="desc" id="" cols="30" rows="10" placeholder="A short description of yourself"></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};
