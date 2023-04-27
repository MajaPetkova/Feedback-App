import { useContext } from "react";
import { AppContext } from "../context/Context";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {

  const { openSidebar } = useContext(AppContext);

  return <nav>
    <div className="nav-center">
    <h3 className="logo">strapi</h3>
    <button className="toggle-btn" onClick={openSidebar}><FaBars/></button>
    </div>
    {/* links later */}
  </nav>;
};
