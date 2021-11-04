import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TimerScreen from '../screens/TimerScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ToolsScreen from '../screens/ToolsScreen';

export default function Navigation() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveBackgroundColor: '#921717',
        tabBarStyle: {
          backgroundColor: 'brown',
        },
        tabBarHideOnKeyboard: true,
      }}>
        <Tab.Screen name="Pomodoro Timer" component={TimerScreen} options={{
          headerStyle: {
            backgroundColor: 'brown',
          },
          headerTitleStyle: {
            color: 'white',
          }
        }} />
        <Tab.Screen name="Project Manager" component={ProjectsScreen} options={{
          headerStyle: {
            backgroundColor: 'brown',
          },
          headerTitleStyle: {
            color: 'white',
          }
        }} />
        <Tab.Screen name="Learning Tools" component={ToolsScreen} options={{
          headerStyle: {
            backgroundColor: 'brown',
          },
          headerTitleStyle: {
            color: 'white',
          }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}