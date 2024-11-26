import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function LeaveApplication() {
  const [name, setName] = useState('');
  const [dept, setDept] = useState('');
  const [registerNo, setRegisterNo] = useState('');
  const [reason, setReason] = useState('');
  const [numDays, setNumDays] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (!name || !dept || !registerNo || !reason || !numDays) {
      alert('Please fill in all fields');
      return;
    }
    router.push('/success'); // Redirect to success page after submission
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave Application</Text>

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
        value={dept}
        onChangeText={setDept}
      />
      <TextInput
        style={styles.input}
        placeholder="Register No."
        placeholderTextColor="#888"
        value={registerNo}
        onChangeText={setRegisterNo}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Reason"
        placeholderTextColor="#888"
        value={reason}
        onChangeText={setReason}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Days Leave"
        placeholderTextColor="#888"
        value={numDays}
        onChangeText={setNumDays}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000', // Black background
  },
  title: {
    fontSize: 24,
    color: '#fff', // White text
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#222', // Dark background for inputs
    color: '#fff', // White text in input fields
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  submitButton: {
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
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Black text
  },
});
