import React, { FC } from 'react';

import styles from './Textarea.module.scss';
import { TextareaTypes } from './Textarea.types';

const Textarea: FC<TextareaTypes> = ({
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
      <textarea
        className={`${className} ${error && styles.hasError}`}
        id={id}
        placeholder={placeholder}
        {...register(id)}
        onFocus={() => handleFocus && handleFocus(true)}
        onBlur={() => handleFocus && handleFocus(false)}
        {...props}
      />
      {error && (
        <div className={styles.error}>
          <small>{error}</small>
        </div>
      )}
    </div>
  );
};

export default Textarea;
