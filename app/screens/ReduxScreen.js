import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../features/UserToken";

import Text from '../components/Text';

const styles = StyleSheet.create({});

function PlaygroundScreen({}) {

  const accessToken = "123";
  const dispatch = useDispatch()
  const userToken = useSelector((state) => state.userToken.value)
  // console.log(dispatch)
  dispatch(setToken(accessToken))

  return (
    <View>

      <Text>{userToken}</Text>
    </View>
  );
}

export default PlaygroundScreen;
