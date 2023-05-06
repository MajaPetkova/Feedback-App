import { Link } from "react-router-dom"

export const ErrorPage =() =>{
    return(
        <div>
            <h2>404</h2>
            <h2>Page not found</h2>
            <Link to="/">Back home</Link>
        </div>
    )
}