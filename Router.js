import {View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddToDo from './src/pages/AddToDo';
import ToDoList from './src/pages/ToDoList';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBarOptions={{showLabel: false, style: {backgroundColor: '#1a237e'}}}>
        <Tab.Screen
          name="Add To Do"
          component={AddToDo}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('./assets/icons/addButton/2x/addButton2x.png')}
                  style={{
                    width: 35,
                    height: 35,
                    tintColor: focused ? '#dce775' : '#a8b545',
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="To Do List"
          component={ToDoList}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('./assets/icons/agendaButton2x/2x/agenda2x.png')}
                  style={{
                    width: 35,
                    height: 35,
                    tintColor: focused ? '#dce775' : '#a8b545',
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
