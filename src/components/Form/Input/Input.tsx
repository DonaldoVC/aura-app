import React, { FC } from 'react';

import styles from './Input.module.scss';
import { InputTypes } from './Input.types';

const Input: FC<InputTypes> = ({
  error,
  label,
  className,
  placeholder,
  id,
  type,
  register,
  handleFocus,
  required,
  ...props
}) => {
  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <input
        className={`${className} ${error && styles.hasError}`}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id)}
        onFocus={() => handleFocus && handleFocus(true)}
        onBlur={() => handleFocus && setTimeout(() => handleFocus(false), 200)}
        {...props}
      />

      <div className={styles.error}>{error && <small>{error}</small>}</div>
    </div>
  );
};

export default Input;
