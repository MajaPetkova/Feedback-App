import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import { Spinner } from "./Spinner";

export const PrivateRoute = () => {
  const { loggedIn, checkInStatus } = useAuthStatus();


  if (checkInStatus) {
    return <Spinner/>;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};
