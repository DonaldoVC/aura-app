import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'react-use';

import { fetchFinancial } from 'api/financial/financial';
import { Company } from 'api/financial/financial.types';

import { useCompany } from 'pages/Search/context/Company/Company.context';

import SelectFilter from 'components/Form/SelectFilter';

import { SearcherValues } from './Searcher.types';
import styles from './Searcher.module.scss';

const Searcher: FC = () => {
  const { selectCompany } = useCompany();
  const [companies, setCompanies] = useState<Company[]>([]);

  const { register, watch, getValues } = useForm<SearcherValues>();

  useDebounce(
    () => {
      if (getValues('searcher')) {
        fetchFinancial(getValues('searcher')).then(data => {
          if (data) {
            setCompanies(data);
          }
        });
      } else {
        setCompanies([]);
      }
    },
    500,
    [watch('searcher')]
  );

  const handleSelect = (element: Company): void => {
    selectCompany(element);
  };

  return (
    <div>
      <SelectFilter
        id="searcher"
        type="text"
        className={styles.input}
        placeholder="Search company or ticker"
        register={register}
        onSelect={handleSelect}
        elements={companies}
      />
    </div>
  );
};

export default Searcher;
