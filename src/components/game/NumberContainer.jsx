import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors';

const deviceWidth = Dimensions.get('window').width;

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numbers}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    fontFamily: 'open-sans-bold',
    maxWidth: '60%',
    width: 180,
  },
  numbers: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 32,
  },
});
