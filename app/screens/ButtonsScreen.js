import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';

const styles = StyleSheet.create({

});

function ButtonsScreen({}) {
  const [buttons, setButtons] = useState([
    {id: 1, selected: false},
    {id: 2, selected: false},
  ]);

  function selectButtons(id) {
    const newButtons = buttons.map(button => {
      if (button.id === id) {
        return {...button, selected: !button.selected};
      }
      return button;
    });
    setButtons(new_buttons)
  }

  return (
    <View>
      {buttons.map(button => (
        <Button
          key={button.id}
          title={button.selected === true ? 'selected' : button.id.toString()}
          onPress={()=>{selectButtons(button.id)} }
        />
      ))}
    </View>
  );
}

export default ButtonsScreen;
