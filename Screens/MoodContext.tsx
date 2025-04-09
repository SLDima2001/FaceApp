import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Mood = {
  id: string;
  mood: string;
  timestamp: string;
};

type MoodContextType = {
  moods: Mood[];
  addMood: (mood: string) => void;
  updateMood: (id: string, mood: string) => void;
  deleteMood: (id: string) => void;
  clearMoods: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const MoodContext = createContext<MoodContextType | undefined>(undefined);

export const useMoodContext = () => {
  const context = useContext(MoodContext);
  if (!context) {
    throw new Error('useMoodContext must be used within a MoodProvider');
  }
  return context;
};

export const MoodProvider = ({ children }: { children: ReactNode }) => {
  const [moods, setMoods] = useState<Mood[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const loadMoods = async () => {
      try {
        const storedMoods = await AsyncStorage.getItem('moods');
        if (storedMoods) {
          setMoods(JSON.parse(storedMoods));
        }
      } catch (error) {
        console.error('Failed to load moods from AsyncStorage', error);
      }
    };
    loadMoods();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('moods', JSON.stringify(moods));
  }, [moods]);

  const addMood = (mood: string) => {
    const newMood = { id: Date.now().toString(), mood, timestamp: new Date().toLocaleString() };
    setMoods((prevMoods) => [...prevMoods, newMood]);
  };

  const updateMood = (id: string, updatedMood: string) => {
    setMoods(moods.map(m => (m.id === id ? { ...m, mood: updatedMood } : m)));
  };

  const deleteMood = (id: string) => {
    setMoods(moods.filter(m => m.id !== id));
  };

  const clearMoods = async () => {
    try {
      await AsyncStorage.removeItem('moods');
      setMoods([]);
    } catch (error) {
      console.error('Failed to clear moods:', error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <MoodContext.Provider value={{ moods, addMood, updateMood, deleteMood, clearMoods, darkMode, toggleDarkMode }}>
      {children}
    </MoodContext.Provider>
  );
};
