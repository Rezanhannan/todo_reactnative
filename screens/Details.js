import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Details({ route }) {

      const { item } = route.params;
      return (
            <View>
                  <View style={styles.container}>
                        <Text style={styles.title}>
                              Text:
                        </Text>
                        <Text style={styles.info}>
                              {item.text}
                        </Text>
                  </View>

                  <View style={styles.container}>
                        <Text style={styles.title}>
                              id:
                        </Text>
                        <Text style={styles.info}>
                              {item.id}
                        </Text>
                  </View>
                  <View style={styles.container}>
                        <Text style={styles.title}>
                              date:
                        </Text>
                        <Text style={styles.info}>
                              {item.date}
                        </Text>
                  </View>
                  <View style={styles.container}>
                        <Text style={styles.title}>
                              time:
                        </Text>
                        <Text style={styles.info}>
                              {item.time}
                        </Text>
                  </View>
            </View>
      );
}

const styles = StyleSheet.create({

      container: {
            flexDirection: 'row',
      },

      title: {

            fontFamily: 'gs-bold',
            fontSize: 24,
            color: "green",
            width: 70,
      },
      info: {
            fontFamily: 'gs-bold',
            fontSize: 18,
            color: "blue",
            alignSelf: 'center',
            paddingLeft: 20,
      }

});