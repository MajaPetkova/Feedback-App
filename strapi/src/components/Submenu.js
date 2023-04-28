import { AppContext } from "../context/Context";
import {useContext} from "react";
import sublinks from "../data"

export const Submenu=()=>{
const {pageId} = useContext(AppContext)
const currentPage= sublinks.find(x => x.pageId === pageId);


    return(
        <div className="submenu">
         <h5>{currentPage?.page  }</h5>
         <div className="submenu-links" style={{gridTemplateColumns:currentPage?.links?.length >3 ? "1fr 1fr" : "1fr"  }}>
          {currentPage?.links?.map(x =>{
           const {id,label, icon, url} = x;
           return <a key={id} href={url} >{icon}{label}</a>
          })}
         </div>
        </div>
    )
} 