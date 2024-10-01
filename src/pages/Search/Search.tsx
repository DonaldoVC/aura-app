import React, { FC } from 'react';

import siteStatsImg from 'assets/images/site-stats.svg';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { CompanyProvider } from './context/Company/Company.context';

import styles from './Search.module.scss';
import Companies from './components/Companies';
import Searcher from './components/Searcher';

const Search: FC = () => {
  return (
    <CompanyProvider>
      <Header />

      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.title}>5,000+ companies with data and insight for you!</p>

          <p className={styles.text}>
            Find the company you are interested in.
            <br />
            This will help us customize your experience.
          </p>

          <Searcher />

          <br />

          <Companies />
        </div>

        <div className={styles.img}>
          <img
            className={styles.logo}
            src={siteStatsImg}
            alt="Site Stats"
            width={400}
            height={400}
          />
        </div>
      </div>

      <Footer />
    </CompanyProvider>
  );
};

export default Search;
