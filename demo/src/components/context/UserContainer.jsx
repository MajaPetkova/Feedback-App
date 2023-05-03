import { useContext } from "react";
import { NavbarContext } from "./Navbar";

export const UserContainer =() =>{
    const{user, logoutHandler} = useContext(NavbarContext)
    return(
        // <div>Hello World</div>
        <div className="user-container">
            {user ? <><p>Hello {user?.name?.toUpperCase()}</p>
            <button className="btn" onClick={logoutHandler}>Logout</button></> :  <p>Please Login</p> }
        </div>
    )
}