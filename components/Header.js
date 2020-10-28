import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
      return (
            <View style={styles.container}>
                  <Text style={styles.headerText}>
                        Meine Aufgaben
                  </Text>
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            backgroundColor: '#ff973e',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
            marginTop: 30,
            paddingTop: 40,
            paddingBottom: 20,
      },

      headerText: {
            color: '#ffffff',
            fontSize: 24,
            // fontStyle: "normal",
            // fontWeight: 'bold',
            fontFamily: 'gs-bold',
      },

});