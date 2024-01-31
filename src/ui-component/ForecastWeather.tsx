import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CurrentWeather from './CurrentWeather'; // Import your CurrentWeather component

interface ForecastProps {
  temperature?: number;
  iconUrl: string;
  size?: 'S' | 'L';
  forecast?: boolean;
  date: string;
}

const ForecastWeather: React.FC<ForecastProps> = ({
  date,
  temperature,
  iconUrl,
  size,
  forecast,
}) => {
  const dateTime = new Date(date);
  const hours = dateTime.getHours();
  return (
    <View style={styles.weatherInfo}>
      <Text style={styles.date}>{hours}</Text>
      <CurrentWeather
        temperature={temperature}
        iconUrl={iconUrl}
        size={size}
        forecast={forecast}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    color: 'white',
    fontSize: 20,
    marginBottom: 5,
    alignItems: 'center',
    alignContent: 'center',
  },
  weatherInfo: {
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    width: '19%',
    marginRight: '1%',
    marginTop: '10%',
  },
});

export default ForecastWeather;
