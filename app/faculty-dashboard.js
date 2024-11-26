import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function FacultyDashboard() {
  const router = useRouter();

  const handleODClick = () => {
    router.push('/od-application');  // Navigate to OD application form
  };

  const handleLeaveClick = () => {
    router.push('/leave-application');  // Navigate to Leave application form
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faculty Dashboard</Text>

      <TouchableOpacity style={styles.optionButton} onPress={handleODClick}>
        <Text style={styles.optionButtonText}>OD Application</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={handleLeaveClick}>
        <Text style={styles.optionButtonText}>Leave Application</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  optionButton: {
    backgroundColor: '#fff',  // White background for the option buttons
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 20,
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.7,  // Increase shadow for the glow effect
    shadowRadius: 5,
  },
  optionButtonText: {
    fontSize: 18,
    color: '#000',  // Black text on white button
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
