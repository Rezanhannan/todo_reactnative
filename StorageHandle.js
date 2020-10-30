import AsyncStorage from '@react-native-async-storage/async-storage';

export const writeData = async (value) => {

      try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@storage_Key', jsonValue)
      } catch (e) {
            console.log(e);
      }
}

const getData = async () => {
      try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
            alert("Die Daten konnten nicht gelesen werden!!");
      }
}


export const readData = (setDATA) => {
      const collectData = async () => {
            let data = await getData();
            data != null ? setDATA(data) : setDATA([]);
      };
      collectData();
};