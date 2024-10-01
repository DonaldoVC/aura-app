import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from 'context/Auth/Auth.context';

import Loader from 'components/Loader';

const PublicRoute: FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
