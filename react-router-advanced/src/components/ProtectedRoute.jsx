// src/components/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// PropTypes validation
ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired, // isAuthenticated should be a boolean
  children: PropTypes.node.isRequired, // children can be any valid React node
};

export default ProtectedRoute;
