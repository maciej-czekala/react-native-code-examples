import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Text from '../components/Text';

const styles = StyleSheet.create({});

function PlaygroundScreen({}) {
  return (
    <View>
      <Button title={'TEST'} containerStyle={{marginTop: 20}} />

      <TextInput placeholder={'test input'} />

      <Text>P</Text>
      <Text type={'h1'}>H1</Text>
      <Text type={'h2'}>H2</Text>
      <Text type={'h3'}>H3</Text>
      <Text type={'h4'}>H4</Text>
    </View>
  );
}

export default PlaygroundScreen;
