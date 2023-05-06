import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const HomePage = () => {
  return (
    <div>
      <Navbar/>
      {/* <h2>Home Page</h2> */}
      {/* <Link to="/about">About</Link> */}
      <Outlet />
    </div>
  );
};
