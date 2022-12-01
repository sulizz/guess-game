import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Pressable,
  Modal,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import GuessComponent from './GuessComponent';

let max = 99;
let min = 1;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const PlayScreen = ({ route }) => {
  const [guess, setGuess] = useState([]);
  const [compGuess, setCompGuess] = useState(0);

  const guessNumber = () => {
    const guessedNum = getRandomInt(99, 1);
    setCompGuess(guessedNum);
    setGuess((currentGuess) => [...currentGuess, guessedNum]);
  };

  useEffect(() => {
    guessNumber();
  }, []);

  const handleOponentAdd = () => {
    min = compGuess;
    const newNum = getRandomInt(min, max);
    setCompGuess(newNum);
    setGuess((currentGuess) => [...currentGuess, newNum]);
  };

  const handleOponentSubstract = () => {
    max = compGuess;
    const newNum = getRandomInt(min, max);
    setCompGuess(newNum);
    setGuess((currentGuess) => [...currentGuess, newNum]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Opponent's Guess</Text>
      </View>
      <View style={styles.header2}>
        <Text style={styles.header2text}>{compGuess}</Text>
        <Text style={styles.header2text}>{route.params.userInput}</Text>
      </View>
      <View style={styles.userGuess}>
        <Text style={styles.text}>Higher Or Lower</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Pressable onPress={handleOponentAdd}>
              <Text style={styles.text}>-</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Pressable onPress={handleOponentSubstract}>
              <Text style={styles.text}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.guessListContainer}>
        <FlatList
          data={guess}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <GuessComponent guess={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  header: {
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 24,
    marginVertical: 24,
    paddingVertical: 4,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  header2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    marginHorizontal: 58,
    paddingVertical: 12,
    borderRadius: 12,
  },
  header2text: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  userGuess: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    marginHorizontal: 58,
    borderRadius: 12,
    marginVertical: 48,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#70053c',
    margin: 10,
    paddingHorizontal: 48,
    paddingVertical: 4,
    borderRadius: 16,
  },
  guessListContainer: {
    flex: 6,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PlayScreen;
