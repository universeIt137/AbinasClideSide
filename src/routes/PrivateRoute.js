import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/routeGurd";


const PrivateRoute = ({ children }) => {
  const authenticated = isAuthenticated();

  return authenticated ? children : <Navigate to="/v/login" />;
};

export default PrivateRoute;