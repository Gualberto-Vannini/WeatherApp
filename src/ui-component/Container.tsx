import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export const Container = (props: Props) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
  },
});
