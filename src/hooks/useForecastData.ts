import {useEffect, useState} from 'react';
import {Forecast, Hour} from '../api/weather/forecast/ForecastInterface.ts';

const useForecastData = (
  weatherData: Forecast | undefined,
  index: number,
): Hour[] => {
  const [forecastData, setForecastData] = useState<Hour[]>([]);

  useEffect(() => {
    const currentDayForecast = weatherData?.forecastday[0]?.hour || [];
    const nextDayForecast = weatherData?.forecastday[1]?.hour || [];

    if (currentDayForecast.length > index) {
      setForecastData(currentDayForecast.slice(index, index + 5));
    } else if (nextDayForecast.length > 0) {
      const remainingElements = 5 - currentDayForecast.length;
      setForecastData([
        ...currentDayForecast,
        ...nextDayForecast.slice(0, remainingElements),
      ]);
    } else {
      setForecastData([]);
    }
  }, [weatherData, index]);

  return forecastData;
};

export default useForecastData;
