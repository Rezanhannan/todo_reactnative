import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert, Keyboard } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddItem(props) {
      const [value, setValue] = React.useState("");
      const [valueTD, setValueTD] = React.useState(new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString());

      /////////////////////////////////////////////////////////////

      const [date, setDate] = React.useState(new Date());
      const [mode, setMode] = React.useState('date');
      const [show, setShow] = React.useState(false);

      const [time, setTime] = React.useState(new Date());

      const onChange = (event, selectedValue) => {
            setShow(Platform.OS === 'ios');
            if (selectedValue == null) {
                  // alert("gecanceld");
                  return;
            }
            if (mode == 'date') {
                  setDate(selectedValue);
                  setMode('time');
                  setShow(Platform.OS !== 'ios'); // to show the picker again in time mode
                  setValueTD(selectedValue.toLocaleDateString() + " " + selectedValue.toLocaleTimeString());
            } else {
                  setTime(selectedValue);
                  setShow(Platform.OS === 'ios');
                  setMode('date');
                  setValueTD(selectedValue.toLocaleDateString() + " " + selectedValue.toLocaleTimeString());
            }


      };



      // const onChange = (event, selectedDate) => {
      //       const currentDate = selectedDate || date;
      //       setShow(Platform.OS === 'ios' ? true : false);
      //       setDate(currentDate);
      //       setValueTD(currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString());
      // };

      const showMode = (currentMode) => {
            setShow(true);
            setMode(currentMode);
      };

      const showDatepicker = () => {
            showMode('date');

      };

      const showTimepicker = () => {
            showMode('time');

      };


      ////////////////////////////////////////////////////////////


      let addNewTodo = () => {
            if (value.length < 3) {
                  Alert.alert("Fehler", "Der Text muss mindestens drei Zeichen haben!");
                  return;
            }

            let myRnId = () => parseInt(Date.now());//not repeated number

            let newData = [...props.data];
            newData.push({
                  id: myRnId(),
                  text: value,
                  date: date,
                  time: time,
            });

            Keyboard.dismiss();
            props.setDATA(newData);

            setValue("");// nach Eingabe leeren
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

                  <TextInput
                        style={styles.dtText}
                        onChangeText={text => setValueTD(text)}
                        value={valueTD}
                        placeholder={new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}
                        editable={false}
                  // blurOnSubmit={Keyboard.dismiss}
                  />
                  {/* <Text style={styles.dtText} onChangeText={text => setValueTD(text)} value={valueTD}>
                        {new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}
                  </Text> */}
                  {show && (
                        <DateTimePicker
                              testID="dateTimePicker"
                              value={date}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={onChange}
                        />
                  )}
                  {show && (
                        <DateTimePicker
                              testID="dateTimePicker"
                              value={date}
                              mode={mode}
                              is24Hour={true}
                              display="default"
                              onChange={onChange}
                        />
                  )}

                  <TouchableOpacity style={styles.button} onPress={showDatepicker}>
                        <Text style={styles.text}>
                              {/* {formatDate(date, time)} */}
                              Zeit & Datum auswählen
                        </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={addNewTodo}>
                        <Text style={styles.text}>
                              Aufgabe Hinzufügen
                        </Text>
                  </TouchableOpacity>
            </View>
      );
}

const formatDate = (date, time) => {
      return `${date.getDate()}/${date.getMonth() +
            1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
};

const styles = StyleSheet.create({
      dtText: {
            color: 'black',
      },
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