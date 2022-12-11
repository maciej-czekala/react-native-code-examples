// https://reactnative.dev/docs/virtualizedlist

// virtualized list does not support columns papameter. Here is workaround to get columns in this component.

import React, {useState} from 'react';
import {VirtualizedList, StyleSheet, View, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'red',
    height: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
});

function VirtualizedListGridScreen({}) {
  const numberOfColumns = 2; // change to see the difference

  let tempData = [];
  for (let i = 0; i < 100; i++) {
    tempData.push({name: 'item ' + i, id: i});
  }
  const [items, setItems] = useState(tempData);

  return (
    <VirtualizedList
      initialNumToRender={numberOfColumns * 4}
      data={items}
      renderItem={({item, index}) => (
        <View key={index} style={{flexDirection: 'row'}}>
          {item.map(
            // render each item in a row to build grid for single row.
            (data, i) => (
              <View // here you should add you list element. data is the item data provided from source list.
                key={data.id}
                style={[
                  styles.item,
                  {width: Dimensions.get('window').width / numberOfColumns},
                ]}></View>
            ),
          )}
        </View>
      )} // row which has numberOfColumns number of items
      keyExtractor={(item, index) => index}
      getItemCount={data => items.length}
      getItem={(data, index) => {
        let rowItems = []; // workaround to get grid into virtual list
        for (let i = 0; i < numberOfColumns; i++) {
          const item = data[index * numberOfColumns + i];
          item && rowItems.push(item);
        }
        return rowItems;
      }}
    />
  );
}

export default VirtualizedListGridScreen;
