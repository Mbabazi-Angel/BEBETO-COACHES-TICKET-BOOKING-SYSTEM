import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const isAdminAuthenticated = localStorage.getItem("adminToken"); // Check token

  return isAdminAuthenticated ? children : <Navigate to="/admin-login" />;
};

export default PrivateRoute;
