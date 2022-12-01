import 'react-native-gesture-handler';
import { useState, useEffect, useCallback } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/StackNavigator';

import { LinearGradient } from 'expo-linear-gradient';
import { GameStartScreen } from './src/screens/GameStartScreen.screens';
import { GamePlayScreen } from './src/screens/GamePlayScreen.screens';
import { GameEndScreen } from './src/screens/GameEndScreen.Screens';

import { Colors } from './src/constants/colors';

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const userNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (lengthOfGuess) => {
    setGameIsOver(true);
    setGuessRounds(lengthOfGuess);
  };

  const onStartNewGameHandler = () => {
    setUserNumber(undefined);
    setGuessRounds(0);
  };

  let screen = <GameStartScreen onPickNumberHandler={userNumberHandler} />;

  if (userNumber) {
    screen = (
      <GamePlayScreen
        userNumber={userNumber}
        gameOverHandler={gameOverHandler}
      />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameEndScreen
        numOfRounds={guessRounds}
        userNumber={userNumber}
        onStartNewGame={onStartNewGameHandler}
      />
    );
  }

  return (
    // <NavigationContainer>
    //   <StatusBar style="light" />
    //   <StackNavigator />
    // </NavigationContainer>

    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
