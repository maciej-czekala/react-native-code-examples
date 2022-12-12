// using: https://github.com/oblador/react-native-vector-icons
// type: fill, outline
// icon - name of the icon from MaterialIcons
// iconStyle - color, size
// textStyle - standard text styling
// containerStyle - standard styling

import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

function AppButton({title, icon, iconStyle, textStyle, containerStyle, type, onPress}) {
  if (!type) {
    type = 'fill';
  }
  if (icon && !iconStyle) {
    iconStyle = {};
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        containerStyle,
        styles[type],
      ]}>
      {icon ? (
        <Icon
          name={icon}
          color={iconStyle.color ? iconStyle.color : styles[type].iconColor}
          size={iconStyle.size ? iconStyle.size : styles.iconStyle.size}
        />
      ) : null}
      <Text style={[styles.text, textStyle, {color: styles[type].text}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const colors = {
  accent: 'dodgerblue',
  text: 'white',
  icon: 'white',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    minHeight: 50,
    // padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 16,
  },
  iconStyle: {
    size: 26,
    color: 'white',
  },
  fill: {
    backgroundColor: colors.accent,
    text: colors.text,
    iconColor: colors.text,
  },
  outline: {
    borderWidth: 2,
    borderColor: colors.accent,
    backgroundColor: colors.text,
    text: colors.accent,
    iconColor: colors.accent,
  },
});

export default AppButton;
