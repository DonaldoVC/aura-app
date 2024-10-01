import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import arrowLeftIcon from 'assets/icons/arrow-left.svg';

import { HeaderProps } from './Header.types';
import styles from './Header.module.scss';

const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div>
        <button className={styles.back} onClick={handleBack}>
          <img src={arrowLeftIcon} alt="back" width={32} height={32} />
          Return
        </button>
        <h1 className={styles.title}>Aura IA</h1>
      </div>
    </div>
  );
};

export default Header;
