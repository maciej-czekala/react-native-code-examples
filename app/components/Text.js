import React from 'react';

import {StyleSheet, Text} from 'react-native';

function AppText({children, style, type = 'p'}) {
  return <Text style={[styles[type], style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  p: {
    fontSize: 14,
  },
  h1: {
    fontSize: 40,
    fontWeight: '300',
  },
  h2: {
    fontSize: 34,
    fontWeight: '100',
  },
  h3: {
    fontSize: 28,
    fontWeight: '500',
  },
  h4: {
    fontSize: 22,
  },
});

export default AppText;
