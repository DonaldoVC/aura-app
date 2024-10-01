import React, { FC } from 'react';

import checkIcon from 'assets/icons/check.svg';

import { ElementListProps } from './ElementList.types';
import styles from './ElementList.module.scss';

const ElementList: FC<ElementListProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <img src={checkIcon} alt="Check" width={32} height={32} />
      <span>{text}</span>
    </div>
  );
};

export default ElementList;
