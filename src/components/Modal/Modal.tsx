import React, { FC } from 'react';
import { createPortal } from 'react-dom';

import iconClose from 'assets/icons/close.svg';

import { ModalProps } from './Modal.types';
import styles from './Modal.module.scss';

const Modal: FC<ModalProps> = ({ handleClose, title, className, children }) => {
  return createPortal(
    <div className={`${styles.container} ${className}`}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>

        <button onClick={handleClose}>
          <img src={iconClose} alt="close" width={32} height={32} />
        </button>
      </div>

      {children}
    </div>,
    document.body
  );
};

export default Modal;
