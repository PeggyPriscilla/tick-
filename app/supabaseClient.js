import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://afremyakgeyevoqvjjmu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmcmVteWFrZ2V5ZXZvcXZqam11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1NDAzMjAsImV4cCI6MjA0ODExNjMyMH0.1lFTMPN56LlZOFZNlemesXLHr4RT3jGvs2KyuSct0Ww';

export const supabase = createClient(supabaseUrl, supabaseKey);
