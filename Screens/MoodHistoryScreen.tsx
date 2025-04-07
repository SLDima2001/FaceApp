import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native';
import { useMoodContext } from './MoodContext';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons

export default function MoodHistoryScreen() {
  const { moods, darkMode, updateMood, deleteMood } = useMoodContext();
  const [editingMoodId, setEditingMoodId] = useState<string | null>(null);
  const [editedMood, setEditedMood] = useState('');

  const handleEdit = (id: string, currentMood: string) => {
    setEditingMoodId(id);
    setEditedMood(currentMood);
  };

  const handleSave = (id: string) => {
    updateMood(id, editedMood);
    setEditingMoodId(null);
    setEditedMood('');
  };

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <Text style={[styles.title, darkMode && styles.darkText]}>Mood History</Text>
      <FlatList
        data={moods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.moodItem}>
            {editingMoodId === item.id ? (
              <TextInput
                style={[styles.input, darkMode && styles.darkInput]}
                value={editedMood}
                onChangeText={setEditedMood}
                autoFocus
              />
            ) : (
              <View style={styles.moodTextContainer}>
                <Text style={[styles.moodText, darkMode && styles.darkText]}>{item.mood}</Text>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(item.id, item.mood)}>
                  <Image source={require('../Images/Edit.jpg')} style={styles.image2} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.deleteButton} onPress={() => deleteMood(item.id)}>
                    <Image source={require('../Images/Trash.jpg')} style={styles.image2} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <Text style={[styles.timestamp, darkMode && styles.darkText]}>{item.timestamp}</Text>
            {editingMoodId === item.id && (
              <TouchableOpacity style={styles.saveButton} onPress={() => handleSave(item.id)}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E6FA' },
  darkContainer: { backgroundColor: '#333' },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  darkText: { color: '#fff' },
  moodItem: { padding: 15, marginVertical: 5, backgroundColor: '', borderRadius: 5, width: '100%' },
  moodTextContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',width: '100%' },
  moodText: { fontSize: 18, color: 'black', flex: 1 },
  timestamp: { fontSize: 14, color: '#777', marginBottom: 10 },
  input: { padding: 10, borderRadius: 5, borderWidth: 1, borderColor: '#ccc', marginBottom: 15 },
  darkInput: { backgroundColor: '#444', color: '#fff', borderColor: '#666' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  editButton: { padding: 0, backgroundColor: '#ffa500', borderRadius: 5, marginLeft: 10 },
  deleteButton: { padding: 0, backgroundColor: '#f44336', borderRadius: 5, marginLeft: 10 },
  saveButton: { padding: 5, backgroundColor: '#6495ED', borderRadius: 5, marginBottom: 5 },
  buttonsContainer: { flexDirection: 'row', alignItems: 'center' },
  image2: {
    width: 40,
    height: 40,
    resizeMode: 'stretch', 
  },
});
