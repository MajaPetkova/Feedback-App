import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

export const PrivateRoute = () => {
const {loggedIn, checkInStatus} = useAuthStatus()
if(checkInStatus){
    return <h3>Loading...</h3>
}
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};
