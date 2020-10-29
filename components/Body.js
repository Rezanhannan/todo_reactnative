import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


import AddItem from './AddItem';
import Todos from './Todos';

export default function Body(props) {
      return (
            <View style={styles.body}>
                  <AddItem data={props.data} setDATA={props.setDATA} />
                  <Todos data={props.data} setDATA={props.setDATA} navigation={props.navigation} />
            </View>
      );
}

const styles = StyleSheet.create({
      body: {
            marginHorizontal: 20,
      },
      button: {
            backgroundColor: '#ff973e',
            alignItems: 'center',
            padding: 10,
            marginTop: 20,
            borderRadius: 5,
      },
      text: {
            color: 'gray'
      }

});