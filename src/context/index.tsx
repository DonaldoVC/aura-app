import React, { FC } from 'react';

import { AuthProvider } from './Auth/Auth.context';

import { ContextWrapperProps } from './context.types';

const ContextWrapper: FC<ContextWrapperProps> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ContextWrapper;
