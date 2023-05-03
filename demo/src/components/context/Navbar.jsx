import { useState, createContext } from "react";
import { NavLinks } from "./NavLinks";

export const NavbarContext =createContext();

export const Navbar = () => {

  const [user, setUser] = useState({
    name: "bob",
  });

  const logoutHandler = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{user, logoutHandler}}>
    <div className="navbar-container">
      <h1>Context Api</h1>
        <NavLinks/>
    </div>
    </NavbarContext.Provider>
    
  );
};
