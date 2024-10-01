import React, { FC } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ disabled, className, ...props }) => {
  return <button className={`${styles.button} ${className}`} disabled={disabled} {...props} />;
};

export default Button;
