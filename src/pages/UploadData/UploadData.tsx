import React, { FC } from 'react';

import Modal from 'components/Modal';

import Form from './components/Form';

import { UploadDataProps } from './UploadData.types';
import styles from './UploadData.module.scss';

const UploadData: FC<UploadDataProps> = ({ handleClose }) => {
  return (
    <Modal title="New Data" handleClose={handleClose}>
      <div className={styles.container}>
        <Form handleClose={handleClose} />
      </div>
    </Modal>
  );
};

export default UploadData;
