import axios from 'axios';

export const apiBaseURL = 'http://api.weatherapi.com/v1/';

export const axiosInstance = axios.create({
  baseURL: apiBaseURL,
});

// https://www.weatherapi.com/api-explorer.aspx#forecast
