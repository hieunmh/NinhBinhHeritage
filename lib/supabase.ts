import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import Constants from 'expo-constants'


const supabaseUrl = "https://vlyzmavszuutbhifycvd.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZseXptYXZzenV1dGJoaWZ5Y3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3OTM1ODksImV4cCI6MjAxNzM2OTU4OX0.sAWRJYFyUFr9VGKToDAdfaqOqrLZg21RI-V-pWwOLjM"


export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})