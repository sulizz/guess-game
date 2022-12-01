import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/colors';

const GussedLog = ({ gussedNum, roundNum }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.itemText}>Guess #{roundNum}</Text>
      <Text style={styles.itemText}>{gussedNum}</Text>
    </View>
  );
};

export default GussedLog;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: Colors.primary800,
    borderRadius: 40,
    width: '100%',
    elevation: 4,
    //ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});
