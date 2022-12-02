import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Title } from '../components/ui/Title';
import { NumberContainer } from '../components/game/NumberContainer';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons';
import GussedLog from '../components/game/GussedLog';
function generateRandomNumber(min, max, exclude) {
  const gussedNum = Math.floor(Math.random() * (max - min)) + min;
  if (gussedNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return gussedNum;
  }
}

let min = 1;
let max = 100;

export const GamePlayScreen = ({ userNumber, gameOverHandler }) => {
  const initalGuess = generateRandomNumber(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  const [guessRounds, setGuessRounds] = useState([initalGuess]);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler(guessRounds.length);
    }
  }, [currentGuess, currentGuess, userNumber]);

  useEffect(() => {
    min = 1;
    max = 100;
  }, []);

  const listItemLength = guessRounds.length;
  //if gussed num is greater than value. gussedNum 22 > value 10 then should click -
  // when we click - we make max as value. max is exclusive.
  //if gussed num is smaller than value then should click +
  //when we click + we make min as value + 1 min is inclusive.

  //if gussed Num is greater than value. + is clicked.
  //set an alert.
  //if gussedNum is less than value and - is clicked.
  //set an alert.
  const nextGuessHandler = (direction) => {
    if (
      (currentGuess > userNumber && direction === 'greater') ||
      (currentGuess < userNumber && direction === 'lower')
    ) {
      Alert.alert('Dont Lie', 'lying is bad', [
        { text: 'Okay', style: 'default' },
      ]);
      return;
    }

    if (direction === 'lower') {
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }
    const newRandomNumber = generateRandomNumber(min, max, currentGuess);
    setCurrentGuess(newRandomNumber);
    setGuessRounds((prev) => [newRandomNumber, ...prev]);
  };
  let potraitScreen =
    width < 480 ? (
      <>
        <Title>Opponent's Guess</Title>

        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionText style={styles.InstructionText}>
            Higher or Lower
          </InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPressHandler={() => nextGuessHandler('greater')}>
                <Ionicons name="md-add" size={24} color="white" />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPressHandler={() => nextGuessHandler('lower')}>
                <Ionicons name="md-remove" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </Card>
        <View style={styles.listContainer}>
          <InstructionText style={styles.text}>
            Computer's Guess
          </InstructionText>
          <FlatList
            data={guessRounds}
            keyExtractor={(item) => item}
            renderItem={(itemData) => {
              return (
                <GussedLog
                  roundNum={listItemLength - itemData.index}
                  gussedNum={itemData.item}
                />
              );
            }}
          />
        </View>
      </>
    ) : (
      <>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'center',
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <PrimaryButton
                    onPressHandler={() => nextGuessHandler('greater')}
                  >
                    <Ionicons name="md-add" size={24} color="white" />
                  </PrimaryButton>
                </View>
              </View>
              <View style={{ alignItems: 'center', paddingVertical: 4 }}>
                <InstructionText>Higher or Lower</InstructionText>
              </View>
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <PrimaryButton
                    onPressHandler={() => nextGuessHandler('lower')}
                  >
                    <Ionicons name="md-remove" size={24} color="white" />
                  </PrimaryButton>
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.listContainer, { marginLeft: 48 }]}>
            <InstructionText style={styles.text}>
              Computer's Guess
            </InstructionText>

            <FlatList
              data={guessRounds}
              keyExtractor={(item) => item}
              renderItem={(itemData) => {
                return (
                  <GussedLog
                    roundNum={listItemLength - itemData.index}
                    gussedNum={itemData.item}
                  />
                );
              }}
            />
          </View>
        </View>
      </>
    );
  return <View style={styles.screen}>{potraitScreen}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    textAlign: 'center',
  },
  InstructionText: {
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
    marginVertical: 12,
  },
  listContainer: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'white',
  },
});
