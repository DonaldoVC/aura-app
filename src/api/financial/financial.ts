import axios from 'axios';

import { Company, CompanyGainers, FetchFinancial, FetchTopGainers } from './financial.types';
import { BASE_URL, GAINERS, SEARCH } from './financial.constants';

export const fetchFinancial: FetchFinancial = async query => {
  try {
    const { data } = await axios.get<Company[]>(`${BASE_URL}${SEARCH}`, {
      params: {
        query,
        limit: 10,
        apikey: process.env.REACT_APP_FINANCIAL_API_KEY,
      },
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const fetchTopGainers: FetchTopGainers = async () => {
  try {
    let { data } = await axios.get<CompanyGainers[]>(`${BASE_URL}${GAINERS}`, {
      params: {
        apikey: process.env.REACT_APP_FINANCIAL_API_KEY,
      },
    });

    data = data.map(element => ({
      ...element,
      companyName: element.companyName.slice(0, 10),
    }));

    return data.sort((a, b) => +b.changesPercentage - +a.changesPercentage).slice(0, 8);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
