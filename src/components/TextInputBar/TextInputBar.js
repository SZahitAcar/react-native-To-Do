import {View, TextInput} from 'react-native';
import React from 'react';

const TextInputBar = ({toDo, onChangeText}) => {
  return (
    <View>
      <TextInput
        placeholder="Add something to do"
        value={toDo}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInputBar;
