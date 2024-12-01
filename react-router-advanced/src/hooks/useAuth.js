// src/hooks/useAuth.js
import { useState } from 'react';

const useAuth = () => {
  // Simulate a simple authentication logic
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
