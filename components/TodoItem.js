import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

export default function TodoItem(props) {
      let deleteItemById = id => {
            const filteredData = props.data.filter(item => item.id !== id);
            props.setDATA(filteredData);
      }
      return (
            <View style={{
                  // flex: 1,
                  flexDirection: 'row',
                  borderColor: '#bbb',
                  borderWidth: 1,
                  borderStyle: "dashed",
                  borderRadius: 1,
                  borderRadius: 10,
                  // backgroundColor: 'red',
                  paddingVertical: 10,
            }}>
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={props.navigation.navigate('Details', { item: props.item })}>
                              <Text style={styles.todoItemText, { alignSelf: 'center', fontFamily: 'gs-regular', fontSize: 18, }}>
                                    {props.text + " " + props.date.toLocaleDateString() + " " + props.time.toLocaleTimeString()}
                              </Text>
                        </TouchableOpacity>
                  </View>
                  <View style={{ alignSelf: "flex-end", paddingRight: 20, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { deleteItemById(props.id); }}>
                              <FontAwesome5 name="trash" size={18} style={styles.icon} />
                        </TouchableOpacity>
                  </View>

            </View>
      );
}
const styles = StyleSheet.create({
      st: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderColor: '#bbb',
            borderWidth: 1,
            borderStyle: "dashed",
            borderRadius: 1,
            borderRadius: 10,
            backgroundColor: 'red',
      },
      st: {
            justifyContent: 'flex-end'
      },
      icon: {
            paddingLeft: 50,
            color: '#ff973e',
            fontSize: 24,
      },
      body: {
            marginHorizontal: 20,
      },
      todoItemText: {

            padding: 16,
            paddingRight: 30,
            marginTop: 16,
            fontFamily: 'gs-bold',

            // borderColor: '#bbb',
            // borderWidth: 1,
            // borderStyle: "dashed",
            // borderRadius: 1,
            // borderRadius: 10,

      }

});