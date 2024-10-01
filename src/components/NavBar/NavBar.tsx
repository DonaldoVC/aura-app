import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import appLogo from 'assets/images/appLogo.svg';
import iconImage from 'assets/icons/image.svg';
import iconSession from 'assets/icons/session.svg';

import { useAuth } from 'context/Auth/Auth.context';

import styles from './NavBar.module.scss';

const NavBar: FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const actions = [
    {
      icon: {
        src: iconImage,
        alt: 'image',
        width: 24,
        height: 24,
      },
      action: () => {},
    },
    {
      icon: {
        src: iconImage,
        alt: 'image',
        width: 24,
        height: 24,
      },
      action: () => {},
    },
    {
      icon: {
        src: iconImage,
        alt: 'image',
        width: 24,
        height: 24,
      },
      action: () => {},
    },
  ];

  const bottomActions = [
    {
      icon: {
        src: iconImage,
        alt: 'image',
        width: 24,
        height: 24,
      },
      action: () => {},
    },
    {
      icon: {
        src: iconImage,
        alt: 'image',
        width: 24,
        height: 24,
      },
      action: () => {},
    },
    {
      icon: {
        src: iconSession,
        alt: 'close session',
        width: 24,
        height: 24,
      },
      action: logout,
    },
  ];

  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src={appLogo}
        alt="Logo"
        width={90}
        height={64}
        onClick={() => navigate('/')}
      />

      <div className={styles.actionList}>
        {actions.map((item, index) => (
          <button key={`actions-${index}`} onClick={item.action}>
            <img
              src={item.icon.src}
              alt={item.icon.alt}
              width={item.icon.width}
              height={item.icon.height}
            />
          </button>
        ))}
      </div>

      <div className={styles.bottomActionList}>
        {bottomActions.map((item, index) => (
          <button key={`bottom-actions-${index}`} onClick={item.action}>
            <img
              src={item.icon.src}
              alt={item.icon.alt}
              width={item.icon.width}
              height={item.icon.height}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
