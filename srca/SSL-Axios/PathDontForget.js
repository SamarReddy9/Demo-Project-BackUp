import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import axios from 'axios';

const App = () => {
  const [secureText, setSecureText] = useState('');

  const secureFetchData = () => {
    const URL = 'https://63ed118e3d9c852c3f5581f8.mockapi.io/posts/posts/3';

    axios
      .get(URL, {
        timeout: 10000,
        httpsAgent: {
          rejectUnauthorized: true,
          cert: 'mycert',
        },
      })
      .then(response => {
        console.log(response.data);
        setSecureText(response.data.title);
      })
      .catch(error => {
        console.log(`error: ${error}`);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={secureFetchData}>
        <Text style={styles.text}>Fetch secured data</Text>
      </TouchableOpacity>

      <Text style={styles.text}>1. {secureText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginVertical: 12,
  },
});

export default App;
