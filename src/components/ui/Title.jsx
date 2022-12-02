import { Platform, StyleSheet, Text } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors';
export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderColor: Colors.accent500,
    padding: 12,
    fontFamily: 'open-sans-bold',
    maxWidth: '80%',
    width: 300,
  },
});
