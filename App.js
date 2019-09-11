import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';


export default function App() {

  buttonOnClick = () => {
    console.log('Click en mi primer botón')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Button title="Mi Primer Botón" onPress={this.buttonOnClick}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 20
  }
});
