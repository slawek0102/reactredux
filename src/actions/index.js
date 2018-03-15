import axios from 'axios';

export const countriesList = () => {
  const request = axios('https://restcountries.eu/rest/v2/all').then(response => response.data);

  return {
    type: 'GET_All_DATA',
    payload: request,
  };
};
