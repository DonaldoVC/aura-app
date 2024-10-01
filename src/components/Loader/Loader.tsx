import React, { FC } from 'react';
import { RotatingTriangles } from 'react-loader-spinner';

import styles from './Loader.module.scss';

const Loader: FC = () => {
  return (
    <div className={styles.container}>
      <RotatingTriangles
        visible={true}
        height="120"
        width="120"
        ariaLabel="rotating-triangles-loading"
      />
    </div>
  );
};

export default Loader;
