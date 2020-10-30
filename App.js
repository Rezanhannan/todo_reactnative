import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Body from './components/Body';
import Header from './components/Header';

import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './routes/Home';
import Settings from './routes/Settings';

import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {


  const Tab = createBottomTabNavigator();

  let [fontsLoaded] = useFonts({
    'gs-bold': require('./assets/fonts/Grandstander-Bold.ttf'),
    'gs-regular': require('./assets/fonts/Grandstander-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={
        {
          tabStyle: {
            // height: 128,
            backgroundColor: 'green',

          },
          style: {
            height: 50,

          },
          labelStyle: {
            fontSize: 20,
            fontFamily: 'gs-bold',

          },
        }
      }>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

