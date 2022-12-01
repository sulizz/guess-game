import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import UserNumberInput from './UserNumberInput';

const HomeScreen = ({ navigation }) => {
  const handleSubmit = (userInput) => {
    navigation.navigate('PlayScreen', { userInput });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Guess My Number</Text>
      </View>

      <UserNumberInput handleSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    borderColor: 'white',
    borderWidth: 1,
    marginTop: -300,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 12,
  },
});

export default HomeScreen;
