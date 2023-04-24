import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { social, links } from "../data";
import logo from "../logo.svg";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
 
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };


  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div className="links-container">
            <ul className="links">
              {links.map((x) => {
                const { id, text, url } = x;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
