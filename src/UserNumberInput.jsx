import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import UserInputButton from './UserInputButton';

const UserNumberInput = ({ handleSubmit }) => {
  const [userInput, setUserInput] = useState('');
  const handleReset = () => {
    setUserInput('');
  };
  const handleConfirm = () => {
    if (parseInt(userInput) < 100 && parseInt(userInput) > 0) {
      handleSubmit(userInput);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter a Number</Text>
      <TextInput
        style={styles.textInput}
        value={userInput}
        onChangeText={(newInput) => setUserInput(newInput)}
        keyboardType="phone-pad"
      />
      <View style={styles.buttonContainer}>
        <UserInputButton buttonTitle="Reset" handlePress={handleReset} />
        <UserInputButton buttonTitle="Confirm" handlePress={handleConfirm} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'white',
    backgroundColor: '#3c011d',
    borderWidth: 1,
    padding: 12,
    marginTop: 40,
    width: '80%',
    alignItems: 'center',
  },
  text: {
    color: '#a36d53',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    borderBottomColor: '#a36d53',
    borderBottomWidth: 2,
    width: '15%',
    color: 'white',
    fontSize: 18,
    padding: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});

export default UserNumberInput;
