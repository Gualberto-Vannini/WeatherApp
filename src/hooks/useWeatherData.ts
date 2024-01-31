import {useEffect, useState} from 'react';
import forecastApi from '../api/weather/forecast/ForecastApi.ts';
import useDebounce from './useDebounce.ts';
import useDateTime from './useDateTime';
import {Forecast} from '../api/weather/forecast/ForecastInterface.ts';

const useWeatherData = (location: string, debounceTime: number = 1000) => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<Forecast>({
    forecastday: [
      {
        hour: [],
      },
    ],
  });
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [temperature, setTemperature] = useState<number>();
  const [iconUrl, setIconUrl] = useState<string>('');
  const [noLocation, addNoLocation] = useState<string>('');

  const debouncedLocation = useDebounce(location, debounceTime);
  const {calculateStartIndex} = useDateTime();

  useEffect(() => {
    const fetchWeatherData = async (city: string) => {
      try {
        await forecastApi(city).then(response => {
          setWeatherData(response.data.forecast);
          setCity(response.data.location.name);
          setCountry(response.data.location.country);
          setTemperature(response.data.current.temp_c);
          setIconUrl(response.data.current.condition.icon);
        });
      } catch (error) {
        addNoLocation('No location found');
      }
    };

    if (debouncedLocation) {
      addNoLocation('');
      setLoading(true);
      fetchWeatherData(debouncedLocation).then(() => setLoading(false));
    }
  }, [debouncedLocation]);

  const startIndex = calculateStartIndex(weatherData);

  return {
    loading,
    weatherData,
    city,
    country,
    temperature,
    iconUrl,
    noLocation,
    startIndex,
  };
};

export default useWeatherData;
