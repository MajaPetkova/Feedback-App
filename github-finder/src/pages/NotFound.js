import {FaHome} from "react-icons/fa";
import { Link } from "react-router-dom";

export const NotFound= ()=>{
    return (
        <div className="notFound">
            <h1>Oops!</h1>
            <p>
                404 - Page not found
            </p>
        
            <div className="hero">
            <Link className="btnPrimary" to="/"><FaHome className="icon"/> BACK TO HOME </Link>
            </div>
         </div>
    )
}