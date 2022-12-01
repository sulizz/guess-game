import { View, TextInput, StyleSheet, Alert, Text } from 'react-native';
import React, { useState } from 'react';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Colors } from '../constants/colors';
import { Title } from '../components/ui/Title';
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/ui/InstructionText';

export const GameStartScreen = ({ onPickNumberHandler }) => {
  const [userInput, setUserInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const resetInputHandler = () => {
    setUserInput('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(userInput);
    //show alert if input is less than 1 or greater than 99 and if its not a number
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 100) {
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'default', onPress: resetInputHandler }],
      );
      return;
    }
    onPickNumberHandler(chosenNumber);
  };
  const onChangeTextHandler = (newValue) => {
    if (isNaN(newValue) || newValue <= 0 || newValue > 100) {
      setUserInput(newValue);
      setIsValid(false);
    } else {
      setUserInput(newValue);
      setIsValid(true);
    }
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number between 1- 99</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          value={userInput}
          onChangeText={(newValue) => onChangeTextHandler(newValue)}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <PrimaryButton onPressHandler={resetInputHandler}>
              Reset
            </PrimaryButton>
          </View>
          <View
            style={
              isValid ? styles.button : [styles.button, styles.unselectedButton]
            }
          >
            <PrimaryButton onPressHandler={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
  unselectedButton: {
    opacity: 0.5,
  },
});
