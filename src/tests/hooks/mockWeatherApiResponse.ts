import WeatherApiResponse from '../../api/weather/forecast/ForecastInterface.ts';

const mockWeatherApiResponse: WeatherApiResponse = {
  location: {
    name: 'London',
    region: 'City of London, Greater London',
    country: 'United Kingdom',
    localtime: '2024-01-31 11:10',
  },
  current: {
    last_updated_epoch: 1706698800,
    last_updated: '2024-01-31 11:00',
    temp_c: 7.0,
    temp_f: 44.6,
    condition: {
      text: 'Overcast',
      icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
    },
  },
  forecast: {
    forecastday: [
      {
        hour: [
          {
            time: '2024-01-31 00:00',
            temp_c: 5.6,
            temp_f: 42.0,
            condition: {
              text: 'Clear ',
              icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
            },
          },
          {
            time: '2024-01-31 01:00',
            temp_c: 5.1,
            temp_f: 41.2,
            condition: {
              text: 'Clear ',
              icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
            },
          },
          {
            time: '2024-01-31 02:00',
            temp_c: 4.8,
            temp_f: 40.7,
            condition: {
              text: 'Partly Cloudy ',
              icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
            },
          },
          {
            time: '2024-01-31 03:00',
            temp_c: 4.6,
            temp_f: 40.3,
            condition: {
              text: 'Cloudy ',
              icon: '//cdn.weatherapi.com/weather/64x64/night/119.png',
            },
          },
          {
            time: '2024-01-31 04:00',
            temp_c: 4.5,
            temp_f: 40.1,
            condition: {
              text: 'Clear ',
              icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
            },
          },
          {
            time: '2024-01-31 05:00',
            temp_c: 4.2,
            temp_f: 39.6,
            condition: {
              text: 'Clear ',
              icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
            },
          },
          {
            time: '2024-01-31 06:00',
            temp_c: 4.2,
            temp_f: 39.6,
            condition: {
              text: 'Clear ',
              icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
            },
          },
          {
            time: '2024-01-31 07:00',
            temp_c: 4.0,
            temp_f: 39.1,
            condition: {
              text: 'Clear ',
              icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
            },
          },
          {
            time: '2024-01-31 08:00',
            temp_c: 3.9,
            temp_f: 39.0,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            },
          },
          {
            time: '2024-01-31 09:00',
            temp_c: 4.7,
            temp_f: 40.5,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            },
          },
          {
            time: '2024-01-31 10:00',
            temp_c: 6.0,
            temp_f: 42.8,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            },
          },
          {
            time: '2024-01-31 11:00',
            temp_c: 7.0,
            temp_f: 44.6,
            condition: {
              text: 'Overcast',
              icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
            },
          },
          {
            time: '2024-01-31 12:00',
            temp_c: 7.8,
            temp_f: 46.0,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            },
          },
          {
            time: '2024-01-31 13:00',
            temp_c: 8.7,
            temp_f: 47.7,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            },
          },
          {
            time: '2024-01-31 14:00',
            temp_c: 9.2,
            temp_f: 48.5,
            condition: {
              text: 'Sunny',
              icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            },
          },
          {
            time: '2024-01-31 15:00',
            temp_c: 9.1,
            temp_f: 48.3,
            condition: {
              text: 'Partly Cloudy ',
              icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
            },
          },
          {
            time: '2024-01-31 16:00',
            temp_c: 8.8,
            temp_f: 47.8,
            condition: {
              text: 'Partly Cloudy ',
              icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
            },
          },
          {
            time: '2024-01-31 17:00',
            temp_c: 8.6,
            temp_f: 47.4,
            condition: {
              text: 'Overcast ',
              icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
            },
          },
          {
            time: '2024-01-31 18:00',
            temp_c: 9.0,
            temp_f: 48.2,
            condition: {
              text: 'Overcast ',
              icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
            },
          },
          {
            time: '2024-01-31 19:00',
            temp_c: 9.8,
            temp_f: 49.7,
            condition: {
              text: 'Overcast ',
              icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
            },
          },
          {
            time: '2024-01-31 20:00',
            temp_c: 10.0,
            temp_f: 50.0,
            condition: {
              text: 'Overcast ',
              icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
            },
          },
          {
            time: '2024-01-31 21:00',
            temp_c: 10.5,
            temp_f: 51.0,
            condition: {
              text: 'Overcast ',
              icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
            },
          },
          {
            time: '2024-01-31 22:00',
            temp_c: 10.4,
            temp_f: 50.7,
            condition: {
              text: 'Overcast ',
              icon: '//cdn.weatherapi.com/weather/64x64/night/122.png',
            },
          },
          {
            time: '2024-01-31 23:00',
            temp_c: 10.4,
            temp_f: 50.7,
            condition: {
              text: 'Patchy rain nearby',
              icon: '//cdn.weatherapi.com/weather/64x64/night/176.png',
            },
          },
        ],
      },
    ],
  },
};

export default mockWeatherApiResponse;
