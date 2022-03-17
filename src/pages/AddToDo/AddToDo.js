import {SafeAreaView, Text, Button, FlatList} from 'react-native';
import React, {useState} from 'react';
import TextInputBar from '../../components/TextInputBar/TextInputBar';

const AddToDo = () => {
  const [toDo, setToDo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleOnChange = text => {
    setToDo(text);
  };
  const handleAddToDo = () => {
    setTodoList([...todoList, toDo]);
    setToDo(null);
  };
  return (
    <SafeAreaView>
      <Text>AddToDo</Text>
      <TextInputBar toDo={toDo} onChangeText={handleOnChange} />
      <Button title="Add" onPress={() => handleAddToDo()} />
      {todoList.map((item, index) => {
        return <Text key={index}>{item}</Text>;
      })}
    </SafeAreaView>
  );
};

export default AddToDo;
