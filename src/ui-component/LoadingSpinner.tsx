import React from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
// @ts-ignore
import backgroundImage from '../assets/backgroundImage.png';

interface LoadingSpinnerProps {
  visible?: boolean;
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = function ({visible}) {
  if (!visible) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={'white'} size={70} />
          <Text style={styles.loadingText}>
            Fetching data, please wait a moment...
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: '5%',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default LoadingSpinner;
