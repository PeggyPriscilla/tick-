import { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function FacultyLogin() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // After validating login (you can add proper validation here)
    router.push('/faculty-dashboard');  // Redirect to Faculty Dashboard
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faculty Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 40,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#fff',  // White button background
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
  },
  loginButtonText: {
    color: '#000',  // Black text on white button
    fontSize: 18,
    fontWeight: 'bold',
  },
});
