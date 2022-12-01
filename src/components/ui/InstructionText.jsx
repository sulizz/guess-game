import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const InstructionText = ({ children, style }) => {
  return <Text style={[styles.inputTitle, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  inputTitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'open-sans',
  },
});
