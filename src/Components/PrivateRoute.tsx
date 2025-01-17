import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const checkAuth = (): boolean => {
  return Boolean(localStorage.getItem('authToken'));
};

const PrivateRoute: React.FC = () => {
  const location = useLocation();
  const isAuthenticated = checkAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
