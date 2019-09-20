import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from './app/components/forms/testForm'



export default function App() {
    constructor() {
      super();

      this.state = {
        testFormValue: {
          user: "",
          password: ""
        }
      }
    }

  sendFormTest = () => {
    console.log('Enviado.')
  }

  const { testFormValue } = this.state;
  
  return (
    <View style={styles.container}>
        <Form 
        ref={this.formTest}
        type={LoginStruct}
        options={LoginOptions}
        value={testFormValue}
        />
        <Button title="Login"
         onPress={this.sendFormTest.bind(this)}
        />
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
