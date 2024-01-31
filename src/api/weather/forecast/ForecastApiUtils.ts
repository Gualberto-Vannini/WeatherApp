import {weatherApiKey} from '../utils/apiKeys.ts';

export const buildApiEndpoint = 'forecast.json';

export const buildQueryParams = (location: string): string => {
  const queryParams = {
    key: weatherApiKey,
    q: location,
    days: '1',
    aqi: 'no',
    alerts: 'no',
    lang: 'it',
  };

  return new URLSearchParams(queryParams).toString();
};
