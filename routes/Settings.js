
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';


export default function Settings() {


      let [fontsLoaded] = useFonts({
            'gs-bold': require('../assets/fonts/Grandstander-Bold.ttf'),
            'gs-regular': require('../assets/fonts/Grandstander-Regular.ttf'),
      });

      if (!fontsLoaded) {
            return <AppLoading />;
      }
      return (
            <View>
                  <Text style={styles.text}>
                        Hier sind die Einstellungen
                  </Text>
            </View>
      );
}



const styles = StyleSheet.create({
      text: {
            fontSize: 20,
            fontFamily: 'gs-bold',
            marginTop: 30,
            color: "blue"
      }

});