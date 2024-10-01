import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from 'components/Form/Input';

import styles from './Form.module.scss';
import { FormProps, FormValues } from './Form.types';
import { formSchema } from './Form.validation';

const Form: FC<FormProps> = ({ onSubmitHandler }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>

      <div>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className={styles.input}>
            <Input
              error={errors.email?.message}
              label="User"
              id="email"
              type="text"
              register={register}
            />
          </div>
          <div className={styles.input}>
            <Input label="Password" id="password" type="password" register={register} />
          </div>

          <input
            type="submit"
            value="Continue"
            className={styles.continueButton}
            disabled={!watch('email') || !watch('password')}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
