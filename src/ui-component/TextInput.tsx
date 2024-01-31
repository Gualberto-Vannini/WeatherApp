import React from 'react';
import {StyleSheet, Text, TextInput as RNTextInput, View} from 'react-native';

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
}) => {
  return (
    <View style={styles.containerView}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: '3%',
    marginVertical: '5%',
    color: 'white',
    fontWeight: '300',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  error: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
});
