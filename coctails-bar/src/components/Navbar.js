import { Link } from "react-router-dom";
import logo from "../assets/cocktails.jpg";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Cocktails Bar" />
          </Link>
          <h3 className="logo-title">Cocktails Bar</h3>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
