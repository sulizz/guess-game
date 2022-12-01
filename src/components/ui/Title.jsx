import { StyleSheet, Text } from 'react-native';
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
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
    fontFamily: 'open-sans-bold',
  },
});