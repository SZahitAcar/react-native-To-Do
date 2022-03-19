import {SafeAreaView, Text, Button, FlatList} from 'react-native';
import React, {useState} from 'react';
import TextInputBar from '../../components/TextInputBar/TextInputBar';
import {useDispatch} from 'react-redux';

const AddToDo = () => {
  const [toDo, setToDo] = useState('');
  // const [todoList, setTodoList] = useState([]);

  const dispatch = useDispatch();

  const handleOnChange = () => {
    dispatch({type: 'ADD_LIST', payload: {todo: toDo}});
    setToDo(null);
  };
  // const handleAddToDo = () => {
  //   setTodoList([...todoList, toDo]);
  //   setToDo(null);
  // };
  return (
    <SafeAreaView>
      <Text>AddToDo</Text>
      <TextInputBar toDo={toDo} onChangeText={setToDo} />
      <Button title="Add" onPress={handleOnChange} />
    </SafeAreaView>
  );
};

export default AddToDo;
