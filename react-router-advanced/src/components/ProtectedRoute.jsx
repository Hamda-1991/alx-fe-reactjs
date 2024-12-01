import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  // If authenticated, return the children components (Profile, etc.)
  return children;
};

// PropTypes validation for the component props
ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired, // `isAuthenticated` should be a boolean
  children: PropTypes.node.isRequired, // `children` can be any valid React node (elements, strings, etc.)
};

export default ProtectedRoute;
