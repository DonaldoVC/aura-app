import axios from 'axios';

import { User } from 'context/Auth/Auth.context.types';

import { LoginType } from './login.types';
import { generateRandomToken } from './login.utils';

export const login: LoginType = async userData => {
  try {
    const { data } = await axios.get<User[]>('/users.json');

    const user = data.find(user => user.email === userData.email);

    if (user && user.password === userData.password) {
      return {
        email: userData.email,
        username: user.username,
        token: generateRandomToken(),
      };
    }

    return null;
  } catch (error) {
    return null;
  }
};
