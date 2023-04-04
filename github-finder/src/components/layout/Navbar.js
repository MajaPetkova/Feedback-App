import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

export const Navbar = ({ title }) => {
  return <nav className="nav">
    <div className="container">
         <div className="logo">
          <FaGithub className="logo-icon"/>
          <Link to="/" className="logo-title">{title}
          </Link>
         </div>
    </div>
    <div className="flex-btn">
          <Link to="/" className="btn">Home</Link>
          <Link to="/about" className="btn">About</Link>
         </div>
  </nav>;
};

Navbar.defaultProps = {
  title: "Github Finder",
};
