import { User } from 'context/Auth/Auth.context.types';

export type LoginTypes = {
  email: string;
  password: string;
};

export type LoginType = (userData: LoginTypes) => Promise<User | null>;
