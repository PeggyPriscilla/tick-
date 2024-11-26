import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import { supabase } from '../supabaseClient'; // Adjust the path if necessary

export default function TestInsertButton() {
  const testInsert = async () => {
    const { error } = await supabase
      .from('students') // Replace with your table name
      .insert([{ id: '31112210400', Name: 'new', Email:'new.gmail.com',Password: 'new' }]); // Replace column names and values


    if (error) {
      console.error('Error inserting data:', error.message);
      Alert.alert('Error', error.message);
    } else {
      console.log('Insert operation successful!');
      Alert.alert('Success', 'Data inserted successfully!');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Test Insert" onPress={testInsert} color="#4A90E2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
