import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AppForm from './app/components/AppForm';
import ImageUpload from './app/components/ImageUpload';
import UserProfile from './app/components/UserProfile';
import axios from 'axios';

const Stack = createNativeStackNavigator();

const fetchAPI = async () => {
  try {
    const res = await axios.get('http://192.168.2.104:8000/');
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
};

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='AppForm' component={AppForm} />
      <Stack.Screen name='ImageUpload' component={ImageUpload} />
      <Stack.Screen name='UserProfile' component={UserProfile} />
    </Stack.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
