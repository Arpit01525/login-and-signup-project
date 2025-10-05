import { useEffect } from 'react';

const RefrshHandler = ({ setIsAuthenticated }) => {
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, [setIsAuthenticated]);

  return null;
};

export default RefrshHandler;
