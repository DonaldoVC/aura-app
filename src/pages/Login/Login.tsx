import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

import logo from 'assets/images/logo.svg';

import { login } from 'api/login/login';
import { useAuth } from 'context/Auth/Auth.context';

import styles from './Login.module.scss';

import Form from './components/Form';
import { FormValues } from './components/Form/Form.types';

const Login: FC = () => {
  const { logged } = useAuth();
  const navigate = useNavigate();

  const onSubmitHandler: SubmitHandler<FormValues> = async data => {
    const userLogged = await login(data);

    if (userLogged) {
      logged(userLogged);

      navigate('/', { replace: true });
    } else {
      toast('Login failed. Please check your credentials', { theme: 'colored' });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" width={150} height={45} />
      </div>

      <div className={styles.form}>
        <Form onSubmitHandler={onSubmitHandler} />
      </div>
    </div>
  );
};

export default Login;
