import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TodoItem(props) {
      let deleteItemById = id => {
            const filteredData = props.data.filter(item => item.id !== id);
            props.setDATA(filteredData);
      }
      return (
            <View>
                  <TouchableOpacity onPress={() => {
                        deleteItemById(props.id);
                  }}>
                        <Text style={styles.text}>
                              {props.text + " " + props.id}
                        </Text>

                  </TouchableOpacity>
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