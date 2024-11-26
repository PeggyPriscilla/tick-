// app/od-application.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';

const ODForm = () => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [registerNumber, setRegisterNumber] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [numberOfDays, setNumberOfDays] = useState('');

  const validateInput = () => {
    if (!name || !department || !registerNumber || !eventName || !eventDate || !numberOfDays) {
      Alert.alert('Validation Error', 'All fields are required.');
      return false;
    }
    if (isNaN(numberOfDays) || Number(numberOfDays) <= 0) {
      Alert.alert('Validation Error', 'Number of days must be a positive number.');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateInput()) return;

    Alert.alert(
      'Form Submitted',
      `Name: ${name}\nDepartment: ${department}\nRegister Number: ${registerNumber}\nEvent Name: ${eventName}\nEvent Date: ${eventDate}\nNumber of Days: ${numberOfDays}`
    );

    // Clear form fields
    setName('');
    setDepartment('');
    setRegisterNumber('');
    setEventName('');
    setEventDate('');
    setNumberOfDays('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>OD Application Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Department"
        placeholderTextColor="#888"
        value={department}
        onChangeText={setDepartment}
      />
      <TextInput
        style={styles.input}
        placeholder="Register Number"
        placeholderTextColor="#888"
        value={registerNumber}
        onChangeText={setRegisterNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Event Name"
        placeholderTextColor="#888"
        value={eventName}
        onChangeText={setEventName}
      />
      <TextInput
        style={styles.input}
        placeholder="Event Date (YYYY-MM-DD)"
        placeholderTextColor="#888"
        value={eventDate}
        onChangeText={setEventDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Days"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={numberOfDays}
        onChangeText={setNumberOfDays}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000', // Black background
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 12,
    backgroundColor: '#222', // Darker background for inputs
    color: '#fff', // White text in input fields
  },
  button: {
    backgroundColor: '#fff', // White background
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#fff', // White glow effect
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10, // For Android shadow effect
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Black text
  },
});

export default ODForm;
