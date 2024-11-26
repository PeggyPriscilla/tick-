import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Success() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Yay! Your form has been successfully submitted!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Black theme background
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: '#4caf50', // Green text for success
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
