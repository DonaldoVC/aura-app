import React, { FC, useEffect, useState } from 'react';

import { fetchTopGainers } from 'api/financial/financial';
import { CompanyGainers } from 'api/financial/financial.types';

import Button from 'components/Button';

import { useCompany } from 'pages/Search/context/Company/Company.context';

import Card from 'pages/Search/components/Card';

import plusIcon from 'assets/icons/plus.svg';
import checkIcon from 'assets/icons/check.svg';

import { CompaniesProps } from './Companies.types';

import styles from './Companies.module.scss';

const Companies: FC<CompaniesProps> = () => {
  const { selectedCompanies, selectCompany, unselectCompany } = useCompany();

  const [companies, setCompanies] = useState<CompanyGainers[]>([]);

  useEffect(() => {
    handleFetchGainers();
  }, []);

  const handleFetchGainers = () => {
    fetchTopGainers().then(data => {
      if (data) {
        setCompanies(data);
      }
    });
  };

  const handleSelect = (element: CompanyGainers): void => {
    if (!selectedCompanies.some(selected => selected.symbol === element.ticker)) {
      selectCompany({
        symbol: element.ticker,
        name: element.companyName,
      });
    } else {
      unselectCompany({
        symbol: element.ticker,
        name: element.companyName,
      });
    }
  };

  return (
    <Card>
      {companies.map((company, index) => (
        <Button key={index} onClick={() => handleSelect(company)}>
          <span>
            <span className={styles.symbol}>{company.ticker} </span>
            <span>{company.companyName}</span>
          </span>

          {!selectedCompanies.some(element => element.symbol === company.ticker) ? (
            <img className={styles.plusIcon} src={plusIcon} alt="add" width={20} height={20} />
          ) : (
            <img className={styles.plusIcon} src={checkIcon} alt="seleted" width={20} height={20} />
          )}
        </Button>
      ))}

      <div className={styles.cardBottom}>
        <span>{`${selectedCompanies.length} Companies saved`}</span>
        <button onClick={handleFetchGainers}>Refresh companies</button>
      </div>
    </Card>
  );
};

export default Companies;
