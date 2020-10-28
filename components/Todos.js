import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import TodoItem from './TodoItem';

export default function Todos(props) {

      const renderItem = ({ item }) => (
            <TodoItem text={item.text}
                  id={item.id}
                  date={item.date}
                  time={item.time}
                  data={props.data}
                  setDATA={props.setDATA}
                  navigation={props.navigation}
                  item={item} />);

      return (
            <View>
                  <FlatList data={props.data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                  />
            </View>
      );
}

const styles = StyleSheet.create({
      body: {
            marginHorizontal: 20,
      },
      text: {

            padding: 16,
            marginTop: 16,
            borderColor: '#bbb',
            borderWidth: 1,
            borderStyle: "dashed",
            borderRadius: 1,
            borderRadius: 10,

      }

});