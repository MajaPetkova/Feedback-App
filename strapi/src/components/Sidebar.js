import {useContext} from "react";
import { AppContext } from "../context/Context";
import {FaTimes} from "react-icons/fa";
import sublinks from "../data";

export const Sidebar=()=>{
    const {isSidebarOpen, closeSidebar} = useContext(AppContext)
    return(
       <aside className={isSidebarOpen ? "aside show-aside" : "aside"}>
        <div className="sidebar-container">
            <button className="btn-close" onClick={closeSidebar}><FaTimes/></button>
            <div className="sidebar-links">
                <ul>
                    {sublinks.map(x =>{
                        const {links,page, pageId} = x;
                        return <article className="sidebar-article" key={pageId}>
                            <h4>{page}</h4>
                            <div className="sidebar-sublinks">
                               {links.map(link => {
                                const {url, icon, label, id} = link;
                                return <a href={url} key={id}>{icon} {label}</a> })} 
                            </div>
                        </article>})}
                </ul>
            </div>
        </div>
       </aside>
    )
}