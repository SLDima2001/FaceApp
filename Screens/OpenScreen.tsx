import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function OpenScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Image source={require('../Images/Logo.png')} style={styles.image} />
      <Text style={styles.title}>Welcome to MoodTracker App</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Get Started  
        <Image source={require('../Images/rightArrow.jpg')} style={styles.image2} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9966CC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'blcak',
    fontSize: 38,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'stretch', 
  },
  image2: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    
  },
});


