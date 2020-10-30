import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Keyboard, TouchableWithoutFeedback, Text } from 'react-native';
import Body from '../components/Body';
import Header from '../components/Header';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { readData } from '../StorageHandle';

export default function Main({ navigation }) {

      ////////////////////// read date
      const getData = async () => {
            try {
                  const jsonValue = await AsyncStorage.getItem('@storage_Key')
                  return jsonValue != null ? JSON.parse(jsonValue) : null;
            } catch (e) {
                  alert("Die Daten konnten nicht gelesen werden!!");
            }
      }

      const [DATA, setDATA] = React.useState([]);

      readData(setDATA);

      return (<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View >
                  <StatusBar hidden={false} />
                  <Header />
                  <Body data={DATA} setDATA={setDATA} navigation={navigation} />
            </View>
      </TouchableWithoutFeedback>);
}