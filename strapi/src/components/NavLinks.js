import sublinks from "../data";

export const NavLinks =() =>{
    return (
        <div className="nav-links">
         {sublinks.map(x => {
            const {pageId, page} = x;
            return <button key={pageId} className="nav-link">{page}</button>
         })}
        </div>
    )
}