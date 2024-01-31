import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface LocationInfoProps {
  city?: string;
  country?: string;
  forecast?: boolean;
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
  },
  city: {
    fontSize: 45,
    color: 'white',
    textAlign: 'center',
  },
  country: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});

const LocationInfo: React.FC<LocationInfoProps> = ({
  city,
  country,
  forecast,
}) => {
  if (!forecast) {
    return (
      <View style={styles.container}>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.country}>{country}</Text>
      </View>
    );
  } else {
    return null;
  }
};

export default LocationInfo;
