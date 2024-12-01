// src/hooks/useAuth.js
import { useState, useEffect } from "react";

// Simulating authentication check, in a real-world app, you'd check a token or API
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate checking for a valid authentication token or session
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated;
};

export default useAuth;
