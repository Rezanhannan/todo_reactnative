import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Body from './components/Body';
import Header from './components/Header';

import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

export default function App() {
  const [DATA, setDATA] = React.useState([]);

  let [fontsLoaded] = useFonts({
    'gs-bold': require('./assets/fonts/Grandstander-Bold.ttf'),
    'gs-regular': require('./assets/fonts/Grandstander-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View >
        <StatusBar hidden={false} />
        <Header />
        <Body data={DATA} setDATA={setDATA} />
      </View>
    </TouchableWithoutFeedback>
  );
}

