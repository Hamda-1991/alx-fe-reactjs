// src/UserContext.js
import  { createContext } from 'react';
import PropTypes from 'prop-types';

// Create the UserContext
export const UserContext = createContext();

// Create a UserContext Provider component
export const UserProvider = ({ children, value }) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Define PropTypes for the UserProvider component
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
