// app/student-dashboard.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const StudentDashboard = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Dashboard</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/od-application')}
      >
        <Text style={styles.buttonText}>Apply for OD</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/leave-application')}
      >
        <Text style={styles.buttonText}>Apply for Leave</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White text
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff', // White background
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#fff', // White glow effect
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10, // For Android shadow effect
    width: '80%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Black text
  },
});

export default StudentDashboard;
