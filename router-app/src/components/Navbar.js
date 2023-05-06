import { Link, NavLink } from "react-router-dom"

export const Navbar =() =>{
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about" >About</Link>
            <NavLink to="/products" className={({isActive}) =>
             isActive ? "active": "link"} >Products</NavLink>
        </nav>
    )
}