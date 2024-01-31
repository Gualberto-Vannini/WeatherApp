import {renderHook} from '@testing-library/react-hooks';
import useForecastData from '../../hooks/useForecastData.ts';
import {Forecast} from '../../api/weather/forecast/ForecastInterface.ts';

// Mocking your Forecast and Hour types for testing purposes
const mockWeatherData: Forecast = {
  forecastday: [
    {
      hour: [
        {
          time: '2024-01-30 21:00',
          temp_c: 25,
          temp_f: 77,
          condition: {text: 'Clear', icon: 'mockIcon'},
        },
        {
          time: '2024-01-30 22:00',
          temp_c: 26,
          temp_f: 78.8,
          condition: {text: 'Partly Cloudy', icon: 'mockIcon2'},
        },
        {
          time: '2024-01-30 23:00',
          temp_c: 24,
          temp_f: 75.2,
          condition: {text: 'Cloudy', icon: 'mockIcon3'},
        },
      ],
    },
    {
      hour: [
        {
          time: '2024-01-31 00:00',
          temp_c: 25,
          temp_f: 77,
          condition: {text: 'Clear', icon: 'mockIcon'},
        },
        {
          time: '2024-01-31 01:00',
          temp_c: 26,
          temp_f: 78.8,
          condition: {text: 'Partly Cloudy', icon: 'mockIcon2'},
        },
        {
          time: '2024-01-30 22:00',
          temp_c: 24,
          temp_f: 75.2,
          condition: {text: 'Cloudy', icon: 'mockIcon3'},
        },
      ],
    },
  ],
};

describe('useForecastData Hook', () => {
  it('should return the correct forecast data based on index', () => {
    const {result, rerender} = renderHook(
      ({weatherData, index}: {weatherData?: Forecast; index: number}) =>
        useForecastData(weatherData, index),
      {
        initialProps: {weatherData: undefined, index: 0} as {
          weatherData?: Forecast;
          index: number;
        },
      },
    );

    expect(result.current).toEqual([]);

    rerender({weatherData: mockWeatherData, index: 0});

    // Assuming the index is 0, it should return the first 5 elements
    expect(result.current).toEqual(
      mockWeatherData.forecastday[0].hour.slice(0, 5),
    );
  });

  // Add more test cases for different scenarios (e.g., when nextDayForecast is used, when index is at the end of the day, etc.)
});
