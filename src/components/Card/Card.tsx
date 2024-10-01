import React, { FC } from 'react';

import styles from './Card.module.scss';
import { CardProps } from './Card.types';

const Card: FC<CardProps> = ({ title, image, action }) => {
  return (
    <div className={styles.container} onClick={action}>
      <div>
        <img src={image} alt={title} width={120} height={120} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
