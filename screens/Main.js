import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Keyboard, TouchableWithoutFeedback, Text } from 'react-native';
import Body from '../components/Body';
import Header from '../components/Header';

export default function Main({ navigation }) {
      const [DATA, setDATA] = React.useState([]);

      return (<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View >
                  <StatusBar hidden={false} />
                  <Header />
                  <Body data={DATA} setDATA={setDATA} navigation={navigation} />
            </View>
      </TouchableWithoutFeedback>);
}