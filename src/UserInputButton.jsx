import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const UserInputButton = ({ buttonTitle, handlePress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={handlePress}>
        <Text style={styles.text}>{buttonTitle}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: 'white',
    backgroundColor: '#70053c',
    borderWidth: 1,
    borderRadius: 22,
    paddingHorizontal: 44,
    paddingVertical: 4,
    marginTop: 12,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default UserInputButton;
