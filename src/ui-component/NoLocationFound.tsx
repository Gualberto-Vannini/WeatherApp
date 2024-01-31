import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface NoLocationFoundProps {
  message?: string;
}

const NoLocationFound: React.FC<NoLocationFoundProps> = ({
  message = 'Please, retry a different city, we are only accepting English language for now.',
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#d24a53',
    alignSelf: 'center',
    marginTop: 10,
  },
  message: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default NoLocationFound;
