// import {Formik} from 'formik';
// import * as Yup from 'yup';
// for validation and helper with forms you can use formik, if there are many forms and are complicated.

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Button from '../components/Button';
import TextInput from '../components/TextInput';

const styles = StyleSheet.create({

});

function ButtonsScreen({}) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')


  function showInputValues()
  {
    if (login.search("@") === -1){
      alert("wrong email")
    }
    else  
    {
      alert(login + " " + password)
    }
    
  }

  return (
    <View>

        <TextInput 
          placeholder="email"
          value={login}
          onChangeText={text=>setLogin(text) }
        />

        <TextInput 
          placeholder="password"
          value={password}
          secureTextEntry
          onChangeText={text=>setPassword(text) }
        />
        <Button
          title={"show input valued"}
          onPress={showInputValues}
        />
    </View>
  );
}

export default ButtonsScreen;
