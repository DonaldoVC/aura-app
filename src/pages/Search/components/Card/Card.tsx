import React, { FC } from 'react';

import { CardProps } from './Card.types';
import styles from './Card.module.scss';

const Card: FC<CardProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Card;
