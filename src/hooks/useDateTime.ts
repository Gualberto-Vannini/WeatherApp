import {Forecast} from '../api/weather/forecast/ForecastInterface.ts';

interface DateTimeHook {
  getCurrentHour: () => number;
  getHourFromTime: (time: string) => number;
  calculateStartIndex: (weatherData: any) => number;
}

const useDateTime = (): DateTimeHook => {
  const getCurrentHour = (): number => new Date().getHours();

  const getHourFromTime = (time: string): number => new Date(time).getHours();

  const calculateStartIndex = (weatherData: Forecast): number => {
    const currentHour = getCurrentHour();
    let startIndex = 0;
    if (
      weatherData &&
      weatherData.forecastday &&
      weatherData.forecastday.length > 0 &&
      weatherData.forecastday[0].hour
    ) {
      startIndex = weatherData.forecastday[0].hour.findIndex(
        (hourData: any) => {
          const hour = getHourFromTime(hourData.time);
          return hour >= currentHour;
        },
      );
    }

    return startIndex;
  };

  return {
    getCurrentHour,
    getHourFromTime,
    calculateStartIndex,
  };
};

export default useDateTime;
