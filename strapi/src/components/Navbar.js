import { useContext } from "react";
import { AppContext } from "../context/Context";
import { FaBars } from "react-icons/fa";
import { NavLinks } from "./NavLinks";

export const Navbar = () => {

  const { openSidebar, setPageId } = useContext(AppContext);
  const handleSubmenu=(e) =>{
    // console.log(e.target)
    if(!e.target.classList.contains("nav-link")){
      setPageId(null)
    }
  }
  return <nav onMouseOver={handleSubmenu}>
    <div className="nav-center">
    <h3 className="logo">strapi</h3>
    <button className="toggle-btn" onClick={openSidebar}><FaBars/></button>
   <NavLinks/>
    </div>
  </nav>;
};
