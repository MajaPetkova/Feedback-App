import { AppContext } from "../context/Context";
import {useContext, useRef} from "react";
import sublinks from "../data";

export const Submenu=()=>{
const {pageId, setPageId} = useContext(AppContext)
const currentPage= sublinks.find(x => x.pageId === pageId);
const  submenuContainer = useRef(null);

const handleMouse=(event)=>{
    const submenu =  submenuContainer.current;
    const {left, right, bottom} = submenu.getBoundingClientRect();
    const{clientX, clientY} = event;
    // console.log(result)
    if(clientX < left -1 || clientX > right-1 || clientY > bottom -1) {
        setPageId(null)


    }
}
    return(
        <div className={currentPage ? "submenu show-submenu" : "submenu" } onMouseLeave={handleMouse} ref={submenuContainer}>
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