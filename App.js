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

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



export default function App() {

  const icons = {
    Home: 'ios-home',
    Settings: 'md-settings',
  }

  const tabBarIcon = (iconName, color, size) => {
    return (<Ionicons
      name={icons[iconName]}
      size={size}
      color={color}
    />);
  }
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
            height: 80,

          },
          labelStyle: {
            fontSize: 20,
            fontFamily: 'gs-bold',

          },
          activeTintColor: '#ff973e',
          inactiveTintColor: '#ffffff'
        }
      }
        screenOptions={
          ({ route }) => ({
            tabBarIcon: ({ color, size }) => tabBarIcon(route.name, color, 40),
          })
        }
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

