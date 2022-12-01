import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

const GuessComponent = ({ guess }) => {
  return (
    <View>
      <Text style={styles.text}>{guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});
export default GuessComponent;
