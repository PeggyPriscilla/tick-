import { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function StudentLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPressed, setIsPressed] = useState(false); // State to track button press

  const handleLogin = () => {
    if (username && password) {
      // Redirect to the student dashboard
      router.push('/student-dashboard');
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={[styles.loginButton, isPressed && styles.buttonPressed]} // Apply glow effect when pressed
        onPress={handleLogin}
        onPressIn={() => setIsPressed(true)} // Button pressed state
        onPressOut={() => setIsPressed(false)} // Button released state
      >
        <Text style={[styles.loginButtonText, isPressed && styles.buttonPressedText]}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
    justifyContent: 'center',
    padding: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#333', // Dark background for input
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    color: '#fff', // White input text
    borderWidth: 1,
    borderColor: '#555', // Subtle border
  },
  loginButton: {
    backgroundColor: '#fff', // White background for button
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#fff', // Glow effect
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10, // Shadow for Android
  },
  buttonPressed: {
    shadowColor: '#4a90e2', // Blue glow effect when pressed
    shadowOpacity: 0.9,
    shadowRadius: 15,
    transform: [{ scale: 1.05 }], // Slight scale-up on press
  },
  loginButtonText: {
    color: '#000', // Black text
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonPressedText: {
    color: '#4a90e2', // Blue text when button glows
  },
});
