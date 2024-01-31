import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

interface WeatherConditionProps {
  temperature: number | undefined;
  iconUrl: string;
  size: 'S' | 'L';
  forecast?: boolean;
}

const WeatherCondition: React.FC<WeatherConditionProps> = ({
  temperature,
  iconUrl,
  size,
  forecast,
}) => {
  const iconSize = size === 'L' ? 64 : 50;
  const containerSize = forecast ? '100%' : '50%';

  return (
    <View style={[styles.container, {width: containerSize}]}>
      {temperature && (
        <>
          <Image
            source={{uri: iconUrl}}
            style={[styles.icon, {width: iconSize, height: iconSize}]}
          />
          <Text
            style={[styles.temperature, {fontSize: size === 'L' ? 28 : 15}]}>
            {temperature}°C
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
  },
  icon: {
    resizeMode: 'contain',
  },
  temperature: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WeatherCondition;
