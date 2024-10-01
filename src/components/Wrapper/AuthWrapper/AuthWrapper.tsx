import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from 'context/Auth/Auth.context';

import Loader from 'components/Loader';
import AppWrapper from 'components/Wrapper/AppWrapper';

const AuthWrapper: FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return user ? (
    <AppWrapper>
      <Outlet />
    </AppWrapper>
  ) : (
    <Navigate to="/login" />
  );
};

export default AuthWrapper;
