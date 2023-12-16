import React from "react";
import "./navbar.scss";
// import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">Fiverr</span>
          {/* </Link> */}

          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          <span>Become a seller</span>
          <button>Join</button>
        </div>
      </div>
      <hr />
       <div className="menu">
        <span>Test</span>
        <span>Test2</span>
       </div>
    </div>
  );
};
