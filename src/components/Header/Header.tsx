import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import documentsImg from 'assets/images/documents.svg';
import uploadDataImg from 'assets/images/upload-data.svg';
import aiToolImg from 'assets/images/ai-tool.svg';

import Card from 'components/Card';

import UploadData from 'pages/UploadData';

import styles from './Header.module.scss';

const Header: FC = () => {
  const navigate = useNavigate();

  const [showUploadData, setShowUploadData] = useState(false);

  const handleShowUploadData = () => {
    setShowUploadData(prevState => !prevState);
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>AURA</h1>
          <h2 className={styles.subtitle}>Augmented Universal Research Assistant</h2>
          <p className={styles.text}>
            Your in one single intuitive platform along side with your team.
          </p>

          <div className={styles.list}>
            <Card title="Search  Data" image={documentsImg} action={() => navigate('/search')} />
            <Card title="Upload your Data" image={uploadDataImg} action={handleShowUploadData} />
            <Card title="Try our AI Tool" image={aiToolImg} action={() => navigate('/ai-tool')} />
          </div>
        </div>
      </div>

      {showUploadData && <UploadData handleClose={handleShowUploadData} />}
    </>
  );
};

export default Header;
