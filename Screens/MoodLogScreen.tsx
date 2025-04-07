import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useMoodContext } from './MoodContext';

export default function MoodLogScreen() {
  const { addMood, darkMode } = useMoodContext();
  const [mood, setMood] = useState('');

  const handleSaveMood = () => {
    if (mood.trim()) {
      addMood(mood);
      setMood('');
    }
  };

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <Text style={[styles.title, darkMode && styles.darkText]}>How Are You Feeling</Text>
      <TextInput
        style={[styles.input, darkMode && styles.darkInput]}
        placeholder="How are you feeling?"
        placeholderTextColor={darkMode ? '#ccc' : '#666'}
        onChangeText={setMood}
        value={mood}
      />
      <TouchableOpacity style={styles.button} onPress={handleSaveMood}>
        <Text style={styles.buttonText}>Save Mood</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F8F8' },
  darkContainer: { backgroundColor: '#333' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#4B0082' },
  darkText: { color: '#fff' },
  input: { width: '90%', padding: 60, borderRadius: 5, backgroundColor: '#E6E6FA', borderWidth: 1, borderColor: '#ccc', marginBottom: 25,},
  darkInput: { backgroundColor: '#444', color: '#fff', borderColor: '#666' },
  button: { padding: 15, borderRadius: 10, alignItems: 'center', backgroundColor: '#FF69B4' },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});
