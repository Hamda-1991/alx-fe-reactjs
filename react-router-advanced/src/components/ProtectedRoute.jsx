import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth"; // Import the custom hook

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // Get the authentication status from the custom hook

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children; // Render the children if authenticated
};

// PropTypes validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // children can be any valid React node
};

export default ProtectedRoute;
