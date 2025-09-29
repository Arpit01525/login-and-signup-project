import { useEffect } from 'react';

const RefrshHandler = ({ setIsAuthenticated }) => {
  
  useEffect(() => {
    // Example: check if token exists in localStorage
    const token = localStorage.getItem('authToken');

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    // Optional: refresh token logic can go here
    // e.g., call API to refresh token periodically
  }, [setIsAuthenticated]);

  return null; // this component doesn't render anything
};

export default RefrshHandler;
