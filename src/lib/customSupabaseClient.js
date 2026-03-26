import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qbyhicjajwxtkotgmzqe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFieWhpY2phand4dGtvdGdtenFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyODE4ODAsImV4cCI6MjA4Nzg1Nzg4MH0.NMteJTyddmMjkz7V1syVKZttuMqSS2g1Hvg5um2n8uk';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
