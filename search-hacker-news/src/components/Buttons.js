import { useContext } from "react"
import { AppContext } from "../context"

export const Buttons =()=>{
    const {isLoading, handlePage, nbPages, page } = useContext(AppContext);


    return (
        <div className="btn-container">
         <button disabled={isLoading} onClick={()=>handlePage("dec")}>Prev</button>
         <p>{page + 1 } of <span>{nbPages}</span></p>
         <button disabled={isLoading} onClick={()=>handlePage("inc")}>Next</button>
        </div>
    )
}