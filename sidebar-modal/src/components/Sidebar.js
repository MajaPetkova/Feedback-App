import { useContext } from "react";
import { AppContext } from "../context/context";
import logo from "../logo.svg";
import { social, links } from "../data";
import { FaTimes } from "react-icons/fa";

export const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext);
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo"/>
        <button className="btn-side" onClick={closeSidebar}><FaTimes/></button>
      </div>
      <ul className="social-links">
        {links.map(x => {return <li key={x.id}><a href={x.url}>{x.icon}{x.text}</a></li>})}
      </ul>
    </aside>
  );
};
