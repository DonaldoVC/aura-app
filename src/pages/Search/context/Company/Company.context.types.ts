import { ReactNode } from 'react';

export type CompanyTypes = {
  symbol: string;
  name: string;
};

export type CompanyContextType = {
  selectedCompanies: CompanyTypes[];
  selectCompany: (company: CompanyTypes) => void;
  unselectCompany: (company: CompanyTypes) => void;
};

export type CompanyProviderProps = {
  children: ReactNode;
};
