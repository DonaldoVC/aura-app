export type Company = {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
};

export type CompanyGainers = {
  changes: number;
  changesPercentage: string;
  companyName: string;
  price: string;
  ticker: string;
};

export type FetchFinancial = (query: string) => Promise<Company[] | undefined>;

export type FetchTopGainers = () => Promise<CompanyGainers[] | undefined>;
