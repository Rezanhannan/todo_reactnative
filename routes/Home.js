
import React from 'react';

import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

import Main from '../screens/Main';
import Details from '../screens/Details';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function Home() {


      const Stack = createStackNavigator();

      let [fontsLoaded] = useFonts({
            'gs-bold': require('../assets/fonts/Grandstander-Bold.ttf'),
            'gs-regular': require('../assets/fonts/Grandstander-Regular.ttf'),
      });

      if (!fontsLoaded) {
            return <AppLoading />;
      }
      return (<Stack.Navigator>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>);
}

