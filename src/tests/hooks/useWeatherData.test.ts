import {renderHook} from '@testing-library/react-hooks';
import axios from 'axios';
import mockWeatherApiResponse from './mockWeatherApiResponse.ts';
import useWeatherData from '../../hooks/useWeatherData';

jest.mock('axios');

describe('useWeatherData Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch weather data and update state variables', async () => {
    (axios.get as jest.Mock).mockResolvedValue({data: mockWeatherApiResponse});

    const {result, waitForNextUpdate} = renderHook(() =>
      useWeatherData('MockCity'),
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.weatherData.forecastday).toEqual(
      mockWeatherApiResponse.forecast.forecastday,
    );
    expect(result.current.city).toBe(mockWeatherApiResponse.location.name);
    expect(result.current.country).toBe(
      mockWeatherApiResponse.location.country,
    );
    expect(result.current.temperature).toBe(
      mockWeatherApiResponse.current.temp_c,
    );
    expect(result.current.iconUrl).toBe(
      mockWeatherApiResponse.current.condition.icon,
    );
  });

  it('should handle no location found error', async () => {
    // Typecast axios as jest.Mocked to include additional methods
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    // Mocking the behavior of axios.get
    mockedAxios.get.mockRejectedValueOnce(new Error('No location found'));

    const {result, waitForNextUpdate} = renderHook(() =>
      useWeatherData('NonExistentCity'),
    );

    await waitForNextUpdate();

    expect(result.current.noLocation).toBe('No location found');
    expect(result.current.loading).toBe(false);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
