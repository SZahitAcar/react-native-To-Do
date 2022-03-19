import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const ToDoList = () => {
  const todoList = useSelector(s => s.toDoList);
  return (
    <SafeAreaView>
      <Text>ToDoList</Text>
      {todoList.map((item, index) => {
        return <Text key={index}>{item}</Text>;
      })}
    </SafeAreaView>
  );
};

export default ToDoList;
