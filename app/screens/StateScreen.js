import React, {useState, useEffect, useReducer} from 'react';
import {StyleSheet, View, Button} from 'react-native';

const styles = StyleSheet.create({});

function StateScreen({}) {
  const [state1, setState1] = useState(1) // state1 = state value, setState1 = use to update state value, useState() = create the resource and set init value.

  const [state, dispatch] = useReducer(updateCount, {count: 0})

  const updateCount = (state, action) => {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1}
      case 'decrement':
        return {count: state.count - 1}
      default:
        throw new Error();
    }
  }

  useEffect(() => {
    dispatch({type: 'increment'})
    // this will run after first render and after each 'state1' update.
    return () => {
      // runs just before the component unmounts
    }
  }, [state1]); // [] is value placed here

  return <View></View>;
}

export default StateScreen;
