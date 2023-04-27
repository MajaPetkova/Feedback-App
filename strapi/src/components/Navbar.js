import { useContext } from "react";
import { AppContext } from "../context/Context";
import { FaBars } from "react-icons/fa";
import { NavLinks } from "./NavLinks";

export const Navbar = () => {

  const { openSidebar } = useContext(AppContext);

  return <nav>
    <div className="nav-center">
    <h3 className="logo">strapi</h3>
    <button className="toggle-btn" onClick={openSidebar}><FaBars/></button>
   <NavLinks/>
    </div>
  </nav>;
};
