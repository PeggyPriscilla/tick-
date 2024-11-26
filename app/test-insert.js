import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { supabase } from '../supabaseClient'; // Adjust the path if necessary

export default function TestInsert() {
  useEffect(() => {
    const testInsert = async () => {
      const { error } = await supabase
        .from('students') // Replace with your table name
        .insert([{ id: '31112210400', Name: 'new', Email:'new.gmail.com',Password: 'new' }]); // Replace column names and values

      if (error) {
        console.error('Error inserting data:', error.message);
      } else {
        console.log('Insert operation successful!');
      }
    };

    testInsert();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Testing Insert Operation...</Text>
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
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
