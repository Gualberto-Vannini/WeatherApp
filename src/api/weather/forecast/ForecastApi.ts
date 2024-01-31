import {axiosInstance} from '../utils/apiBaseUrl.ts';
import WeatherApiResponse from './ForecastInterface.ts';
import {AxiosResponse} from 'axios';
import {buildApiEndpoint, buildQueryParams} from './ForecastApiUtils';

const forecastApi = async (
  location: string,
): Promise<AxiosResponse<WeatherApiResponse>> => {
  try {
    const queryString = buildQueryParams(location);

    const response = await axiosInstance.get<WeatherApiResponse>(
      `${buildApiEndpoint}?${queryString}`,
    );

    return response;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default forecastApi;
