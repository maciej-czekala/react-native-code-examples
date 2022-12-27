import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button} from 'react-native';

const styles = StyleSheet.create({});

function ArraysScreen({}) {
  function findNumber() {
    const arrayNumbers = [1, 2, 22, 44, 555, 4];

    const lowestNumber = Math.min(...arrayNumbers);
    console.log(lowestNumber);

    const highestNumber = Math.max(...arrayNumbers);
    console.log(highestNumber);

    const specificNumber = arrayNumbers.find(elem => elem === 22);
    console.log(specificNumber);

    const indexOfNumber = arrayNumbers.indexOf(22);
    console.log(indexOfNumber);

    //combine
    const arrayNames = ['John', 'Mark', 'Martin'];
    const array2 = ['a', 'b', 'c'];
    const array3 = ['d', 'e', 'f'];
    const array4 = array2.concat(array3);
    console.log(array4)

    // or user
    const array4_v2 = [...array2, ...array3, "o"]
    console.log(array4_v2)


    // sum elements in array
    const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum); // 6

    // Map
    const newNumber1 = arrayNumbers.map((item, index) => item * index);
    console.log(newNumber1);

    // filter
    const newNumber2 = arrayNumbers.filter(item => item < 2);
    console.log(newNumber2);

    const NumberwLowerThan5 = arrayNumbers.filter(item => item < 5).map(item2 => item2*item2);
    console.log(NumberwLowerThan5);

    // find all records with part exact string
    
    const newNumber3 = arrayNames.filter(item => {
      return item === 'John';
    });
    console.log(newNumber3);

    // find all records with part of the string
    const newNumber4 = arrayNames.filter((item) => {
      return item.toLowerCase().includes('m');
    });
    console.log(newNumber4);
  }

  function findPage(page) {
    page = page ?? 0; // if page is null or undefined assign 0;
  }

  const testString = `color ${"red"}`

  const arrayCity = {
    street: "",
    city: ""
  }
  const {city, street} = arrayCity

  useEffect(() => {
    findNumber();
    findPage();
  }, []);

  return <View></View>;
}

export default ArraysScreen;
