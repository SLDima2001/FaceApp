import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MoodProvider } from './Screens/MoodContext'; // Import the MoodProvider

import HomeScreen from './Screens/HomeScreen';
import MoodLogScreen from './Screens/MoodLogScreen';
import MoodHistoryScreen from './Screens/MoodHistoryScreen';
import OpenScreen from './Screens/OpenScreen';
import SettingsScreen from './Screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <MoodProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Open">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MoodLogScreen" component={MoodLogScreen} />
          <Stack.Screen name="MoodHistory" component={MoodHistoryScreen} />
          <Stack.Screen name="Open" component={OpenScreen} />
          <Stack.Screen name="Moodsettings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MoodProvider>
  );
}
