import React from 'react';
import { Navigate } from 'react-router-dom';
import authAPI from '../api/auth';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = authAPI.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default PrivateRoute;
