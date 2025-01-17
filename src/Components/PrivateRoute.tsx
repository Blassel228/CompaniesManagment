import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import {getItem} from "../Utils/localstorage.tsx";

const checkAuth = (): boolean => {
  return Boolean(getItem('token'));
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
