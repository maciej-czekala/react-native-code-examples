import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';

function VirtualizedListGridScreen({}) {
  const [items, setItems] = useState([]);

  async function getData() {
    const response = await fetch('https://reactnative.dev/movies.json',
    {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    setItems(json.movies);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <FlatList
      data={items}
      renderItem={({item}) => (
        <View>
          <Text>{item.title}</Text>
          <Text>{item.releaseYear}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default VirtualizedListGridScreen;
