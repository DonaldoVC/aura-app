import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from 'components/NavBar';

import ProtectedRoutes from 'routes/constansts/protected.routes';

import styles from './AppWrapper.module.scss';
import { AppWrapperProps } from './AppWrapper.types';

const AppWrapper: FC<AppWrapperProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const route = ProtectedRoutes.find(protectedRoute => protectedRoute.path === location.pathname);

    document.title = route?.title ? `Aura - ${route?.title}` : 'Aura';
  }, [location]);

  return (
    <div className={styles.container}>
      <NavBar />

      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default AppWrapper;
