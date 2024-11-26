import React, { useEffect } from 'react';
import { supabase } from './supabaseClient';

export default function App() {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase
        .from('your_table_name') // Replace with an actual table name
        .select('*');

      if (error) {
        console.error('Database error:', error.message);
      } else {
        console.log('Database working, data:', data);
      }
    };

    testConnection();
  }, []);

  return (
    <div>
      <h1>Testing Supabase Connection</h1>
    </div>
  );
}
