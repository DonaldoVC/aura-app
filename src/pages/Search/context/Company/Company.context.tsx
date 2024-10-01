import React, { createContext, FC, useContext, useState } from 'react';
import { CompanyContextType, CompanyProviderProps, CompanyTypes } from './Company.context.types';

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const CompanyProvider: FC<CompanyProviderProps> = ({ children }) => {
  const [companies, setCompanies] = useState<CompanyTypes[]>([]);

  const selectCompany = (company: CompanyTypes) => {
    const exist = companies.find(element => element.symbol === company.symbol);

    if (!exist) {
      const newCompanies = [...companies, company];

      setCompanies(newCompanies);
    }
  };
  const unselectCompany = (company: CompanyTypes) => {
    const index = companies.findIndex(element => element.symbol === company.symbol);

    if (index >= 0) {
      const newCompanies = [...companies];
      newCompanies.splice(index, 1);

      setCompanies(newCompanies);
    }
  };

  return (
    <CompanyContext.Provider
      value={{ selectedCompanies: companies, selectCompany, unselectCompany }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = (): CompanyContextType => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useAuth must be used within an CompanyContext');
  }
  return context;
};
