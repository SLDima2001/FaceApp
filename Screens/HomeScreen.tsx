import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch,Image } from 'react-native';
import { useMoodContext } from './MoodContext';

export default function HomeScreen({ navigation }: { navigation: any }) {
  const { darkMode, toggleDarkMode } = useMoodContext();

  return (
    
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <View style={styles.switchContainer}>
        <Text style={[styles.switchText, darkMode && styles.darkText]}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>

      <Text style={[styles.title, darkMode && styles.darkText]}>Welcome to Mood Tracker</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MoodLogScreen')}>
        <Text style={styles.buttonText}>Create Mood Log</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MoodHistory')}>
        <Text style={styles.buttonText}>View History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Settingsbutton} onPress={() => navigation.navigate('Moodsettings')}>
        <Image source={require('../Images/Settings.jpg')} style={styles.image2} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ADD8E6' },
  darkContainer: { backgroundColor: '#333' },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 50, color: '#333' },
  darkText: { color: '#fff' },
  button: { padding: 20, borderRadius: 10, marginBottom: 10, width: '80%', alignItems: 'center', backgroundColor: '#4B0082' },
  Settingsbutton: { position: 'absolute',bottom: 20, right: 20,   },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  switchContainer: { position:'absolute',top: 20, right: 20,},
  switchText: { fontSize: 18, marginRight: 10 },
  image2: {
    width: 80,
    height:80,
    resizeMode: 'stretch',
  },
});
