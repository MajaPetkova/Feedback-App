import "./navbar.css";
import logo from "../../assets/logo.webp";
import theme_pattern from "../../assets/theme_pattern.svg";
import underline from "../../assets/nav_underline.svg";
import { useState } from "react";
import  AnchorLink  from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo-img" />
      <img src={theme_pattern} alt="" className="theme" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink >
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
        <AnchorLink className="anchor-link"  offset={50} href="#about">
          <p onClick={() => setMenu("about")}>About Me</p>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li>
        <AnchorLink className="anchor-link" offset={50} href="#work">
          <p onClick={() => setMenu("work")}>Portfolio</p>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li>
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p onClick={() => setMenu("contact")}>Contact</p>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
