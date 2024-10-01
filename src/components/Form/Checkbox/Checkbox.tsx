import React, { FC } from 'react';

import checkIcon from 'assets/icons/check.svg';

import { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.scss';

const Checkbox: FC<CheckboxProps> = ({ text, checked, onCheck, error }) => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.check} ${error && styles.hasError}`}
        onClick={() => onCheck && onCheck(text)}
      >
        {checked && (
          <img className={styles.plusIcon} src={checkIcon} alt="seleted" width={20} height={20} />
        )}
      </div>

      <span>{text}</span>
    </div>
  );
};

export default Checkbox;
