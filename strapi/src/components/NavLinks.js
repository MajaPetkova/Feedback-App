import {useContext} from "react";
import { AppContext } from "../context/Context";
import sublinks from "../data";

export const NavLinks =() =>{
    const{setPageId} = useContext(AppContext)
    return (
        <div className="nav-links">
         {sublinks.map(x => {
            const {pageId, page} = x;
            return <button key={pageId} className="nav-link" onMouseEnter={()=>setPageId(pageId)}>{page}</button>
         })}
        </div>
    )
}