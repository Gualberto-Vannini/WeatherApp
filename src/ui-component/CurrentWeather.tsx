import React from 'react';
import { StyleSheet, View } from "react-native";
import LocationInfo from './LocationInfo';
import WeatherCondition from './WeatherCondition';
import ForecastWeather from "./ForecastWeather.tsx";

interface CurrentWeatherProps {
  city?: string;
  country?: string;
  temperature: number | undefined;
  iconUrl: string;
  size?: 'S' | 'L';
  forecast?: boolean;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  city,
  country,
  temperature,
  iconUrl,
  size = 'L',
  forecast,
}) => {
  return (
    <View style={styles.container}>
      <LocationInfo forecast={forecast} city={city} country={country} />
      <WeatherCondition
        size={size}
        temperature={temperature}
        iconUrl={`https:${iconUrl}`}
        forecast={forecast}
      />
    </View>
  );
};

export default CurrentWeather;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: '5%',
  },
});
