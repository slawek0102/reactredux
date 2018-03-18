import axios from 'axios';

export const getCountriesList = () => {
  const request = axios('https://restcountries.eu/rest/v2/all').then(response => response.data);
  return {
    type: 'GET_ALL_DATA',
    payload: request,
  };
};

export const getCountryDetails = () => {
  return {
    type: 'GET_COUNTRY_DETAILS',
    getCountryDetails: getCountryDetails,
  };
};
