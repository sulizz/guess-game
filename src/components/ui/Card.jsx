import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors';
export const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 30,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 24,
    backgroundColor: Colors.primary700,
    elevation: 4, //anroid shadow
    //ios shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
  },
});
