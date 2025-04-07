import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useMoodContext } from './MoodContext';

const SettingsScreen = ({ navigation }: { navigation: any } ) => {
  const { clearMoods, darkMode } = useMoodContext(); // Use clearMoods instead of setMoods

  const handleClearData = async () => {
    try {
      await clearMoods(); // Call clearMoods instead of setMoods([])
      console.log('All previous data cleared');
    } catch (error) {
      console.error('Error clearing mood data:', error);
    }
  };

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <Text style={[styles.header, darkMode && styles.darkText]}>Settings</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MoodLogScreen')}>
        <Text style={styles.buttonText}>Create Mood Log</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MoodHistory')}>
        <Text style={styles.buttonText}>View History</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.clearButton} onPress={handleClearData}>
        <Text style={styles.buttonText}>Clear All Previous Data</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6E6FA',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  header: {
    position:'absolute',
    top:20,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    
  },
  darkText: {
    color: '#fff',
  },
  button: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#4B0082',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  clearButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});

export default SettingsScreen;
