import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from './app/components/forms/testForm'



export default function App() {

  return (
    <View style={styles.container}>
        <Form 
        ref={this.formTest}
        type={LoginStruct}
        options={LoginOptions} />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20
  }
});
