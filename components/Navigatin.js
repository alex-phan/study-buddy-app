import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TimerScreen from '../screens/TimerScreen';
import TasksScreen from '../screens/TasksScreen';
import ToolsScreen from '../screens/ToolsScreen';

export default function Navigation() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          let iconName;

          if (route.name === "Pomodoro Timer") {
            iconName = 'timer';
          } else if (route.name === "Task Manager") {
            iconName = 'list';
          } else if (route.name === "Learning Tools") {
            iconName = 'cube';
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarActiveBackgroundColor: 'brown',
        tabBarInactiveBackgroundColor: '#921717',
        tabBarHideOnKeyboard: true,
      })}>
        <Tab.Screen name="Pomodoro Timer" component={TimerScreen} options={{
          headerStyle: {
            backgroundColor: 'beige',
            borderBottomWidth: 1,
            borderBottomColor: '#E5E5CC',
          },
          headerTitleStyle: {
            color: 'black',
          }
        }} />
        <Tab.Screen name="Task Manager" component={TasksScreen} options={{
          headerStyle: {
            backgroundColor: 'beige',
            borderBottomWidth: 1,
            borderBottomColor: '#E5E5CC',
          },
          headerTitleStyle: {
            color: 'black',
          }
        }} />
        <Tab.Screen name="Learning Tools" component={ToolsScreen} options={{
          headerStyle: {
            backgroundColor: 'beige',
            borderBottomWidth: 1,
            borderBottomColor: '#E5E5CC',
          },
          headerTitleStyle: {
            color: 'black',
          }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}