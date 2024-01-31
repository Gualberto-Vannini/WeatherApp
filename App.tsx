import React, {useState} from 'react';
import {SafeAreaView, ImageBackground, View, StyleSheet} from 'react-native';
import {TextInput as RNTextInput} from './src/ui-component/TextInput';
import {Container} from './src/ui-component/Container.tsx';
import LoadingSpinner from './src/ui-component/LoadingSpinner.tsx';
import NoLocationFound from './src/ui-component/NoLocationFound.tsx';
import CurrentWeather from './src/ui-component/CurrentWeather.tsx';
import ForecastWeather from './src/ui-component/ForecastWeather.tsx';
import useWeatherData from './src/hooks/useWeatherData.ts';
import useForecastData from './src/hooks/useForecastData.ts';
import EmptyWeatherState from './src/ui-component/EmptyWeatherState.tsx';
import {Hour} from './src/api/weather/forecast/ForecastInterface.ts';
// @ts-ignore
import backgroundImage from './src/assets/backgroundImage.png';

function App(): React.JSX.Element {
  const [location, addLocation] = useState<string>('');

  const {
    loading,
    weatherData,
    city,
    country,
    temperature,
    iconUrl,
    noLocation,
    startIndex,
  } = useWeatherData(location);
  const forecastData = useForecastData(weatherData, startIndex);

  if (loading) {
    return <LoadingSpinner visible={loading} />;
  }

  const isEmptyWeatherData =
    !weatherData ||
    (weatherData.forecastday[0] &&
      weatherData.forecastday[0].hour.length === 0);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={backgroundImage}
        style={{width: '100%', height: '100%'}}>
        <Container>
          <RNTextInput
            label={'Insert Your City (english only)'}
            placeholder={'type a new city'}
            value={location}
            onChangeText={text => addLocation(text)}
            error={noLocation}
          />
          {noLocation ? (
            <NoLocationFound />
          ) : isEmptyWeatherData ? (
            <EmptyWeatherState />
          ) : (
            <>
              <CurrentWeather
                city={city}
                country={country}
                temperature={temperature}
                iconUrl={iconUrl}
              />
              <View style={styles.forecastContainer}>
                {forecastData.map((hourData: Hour, index: number) => (
                  <ForecastWeather
                    key={index}
                    temperature={hourData.temp_c}
                    iconUrl={hourData.condition.icon}
                    size={'S'}
                    forecast={true}
                    date={hourData.time}
                  />
                ))}
              </View>
            </>
          )}
        </Container>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  forecastContainer: {
    flexDirection: 'row',
    borderTopColor: 'white',
    borderTopWidth: 1,
    marginTop: '5%',
  },
});
