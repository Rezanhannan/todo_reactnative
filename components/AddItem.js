import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert, Keyboard } from 'react-native';
//Step 1: Get Keyboard, TouchableWithoutFeedback from ‘react-native’;
//Step 2: Create an arrow function to write dismiss keyboard code
//Step 3: Wrap all TextInput inside <DismissKeyboard> </DismissKeyboard>

export default function AddItem(props) {
      const [value, setValue] = React.useState("Hallo Welt");

      // const DismissKeyboard = ({ children }) => (
      //       <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      //             {children}
      //       </TouchableWithoutFeedback>
      // );
      let addNewTodo = () => {
            if (value.length < 3) {
                  Alert.alert("Fehler", "Der Text muss mindestens drei Zeichen haben!");
                  return;
            }
            let myRnId = () => parseInt(Date.now());//not repeated number
            let newData = [...props.data];
            newData.push({
                  id: myRnId(),
                  text: value
            });
            Keyboard.dismiss();
            props.setDATA(newData);

            // props.setDATA((data) => {
            //       return [...data, {
            //             id: myRnId(),
            //             text: value
            //       }];
            // });
      };

      return (
            <View >
                  <TextInput
                        style={styles.input}
                        onChangeText={text => setValue(text)}
                        value={value}
                        placeholder="Neue Aufgabe..."
                  // blurOnSubmit={Keyboard.dismiss}
                  />

                  <TouchableOpacity style={styles.button} onPress={addNewTodo}>
                        <Text style={styles.text}>
                              Aufgabe Hinzufügen
                        </Text>
                  </TouchableOpacity>
            </View>
      );
}

const styles = StyleSheet.create({
      input: {
            height: 40,
            borderColor: '#ddd',
            borderWidth: 0,
            borderBottomWidth: 2,
            color: '#888'
      },
      button: {
            backgroundColor: '#ff973e',
            alignItems: 'center',
            padding: 10,
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 5,
      },
      text: {
            color: '#ffffff',
      }
      // container: {
      //       backgroundColor: '#ff973e',
      //       alignItems: 'center',
      //       justifyContent: 'center',
      //       marginVertical: 40,
      //       paddingTop: 40,
      //       paddingBottom: 20,
      // },

      // headerText: {
      //       color: '#ffffff',
      //       fontSize: 18,
      //       fontStyle: "normal"
      // },

});