import { Link } from "react-router-dom"

export const Error =() =>{
    return(
       <section className="error-section">
        <h1 className="title">Oops it's a dead end!</h1>
        <Link to="/" className="btn">Back home</Link>
       </section>
    )
}