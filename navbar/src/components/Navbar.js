import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { social, links } from "../data";
import logo from "../logo.svg";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    console.log()
    setShowLinks(!showLinks);
  };

  const linkStyles= {
     height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` :`0px`
  }
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {/* {showLinks && ( */}
        {/* <div className={showLinks ? "links-container show-container" :"links-container"}> */}
        <div className="links-container" ref={linksContainerRef} style={linkStyles}>
          <ul className="links" ref={linksRef}>
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
        {/* )} */}
      </div>
    </nav>
  );
};
