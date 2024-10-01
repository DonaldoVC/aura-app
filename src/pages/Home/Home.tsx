import React, { FC } from 'react';

import personalGoalsImg from 'assets/images/personal-goals.svg';

import { useAuth } from 'context/Auth/Auth.context';

import Header from 'components/Header';
import Footer from 'components/Footer';

import styles from './Home.module.scss';

import ElementList from './components/ElementList';

const Home: FC = () => {
  const { user } = useAuth();

  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.username}>Welcome {user?.username}!</p>

          <p className={styles.welcome}>We are so glad to have in Aura.</p>

          <p className={styles.text}>
            We have 500+ companies with interviews and data for your investment analysis and
            research.
          </p>
          <p className={styles.text}>You will be able to:</p>

          <ElementList text="Save companies of your interest and see new entries"></ElementList>
          <ElementList text="Use our AI tool to summarize interviews"></ElementList>
          <ElementList text="Get exclusive data"></ElementList>
          <ElementList text="Common questions"></ElementList>
          <ElementList text="Make reports"></ElementList>

          <div className={styles.begin}>
            <span>Let’s begin!</span>
          </div>
        </div>

        <div className={styles.img}>
          <img
            className={styles.logo}
            src={personalGoalsImg}
            alt="Personal Goals"
            width={400}
            height={400}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
