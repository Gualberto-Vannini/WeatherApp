import {View, Text, StyleSheet} from 'react-native';

const EmptyWeatherState = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search for a city to see the weather</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
  },
});

export default EmptyWeatherState;
