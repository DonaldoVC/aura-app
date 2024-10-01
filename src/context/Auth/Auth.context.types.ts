import { ReactNode } from 'react';

export type User = {
  email: string;
  username: string;
  token: string;
  password?: string;
};

export type AuthContextType = {
  user: User | null;
  logged: (user: User) => void;
  logout: () => void;
  loading: boolean;
};

export type AuthProviderProps = {
  children: ReactNode;
};
