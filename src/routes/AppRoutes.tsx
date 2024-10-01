import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PublicRoute from 'components/Wrapper/PublicWrapper';
import AuthWrapper from 'components/Wrapper/AuthWrapper';

import PublicRoutes from './constansts/public.routes';
import ProtectedRoutes from './constansts/protected.routes';

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute />}>
          {PublicRoutes.map((publicRoute, index) => (
            <Route key={`public-${index}`} path={publicRoute.path} element={publicRoute.element} />
          ))}
        </Route>

        <Route element={<AuthWrapper />}>
          {ProtectedRoutes.map((publicRoute, index) => (
            <Route
              key={`protected-${index}`}
              path={publicRoute.path}
              element={publicRoute.element}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
