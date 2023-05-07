import { Link } from "react-router-dom";
import logo from "../logo.jpg";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="name">

        <Link to="/">
          <img src={logo} alt="cocktail-logo" className="cocktail-logo"></img>
        </Link>
          <p>TheCoctailDB</p>
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
