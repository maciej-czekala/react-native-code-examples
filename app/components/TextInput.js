// using: https://github.com/oblador/react-native-vector-icons

import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function AppTextInput({icon, width = '100%', ...otherProps}) {
  return (
    <View style={[styles.container, {width}]}>
      {icon && (
        <Icon
          name={icon}
          size={20}
          color={styles.icon.color}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={styles.input.placeholderTextColor}
        width={width}
        style={styles.input}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderColor: '#B8B8B8',
    borderWidth: 2,
    borderRadius: 4,
    flexDirection: 'row',
    paddingHorizontal: 10,
    minHeight: 50,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    color: 'white',
  },
  input: {
    color: 'gray',
    placeholderTextColor: '#B8B8B8',
    fontSize: 16
  },
});

export default AppTextInput;
