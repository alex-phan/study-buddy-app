import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TimerScreen from '../screens/TimerScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ToolsScreen from '../screens/ToolsScreen';

export default function Navigation() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Timer" component={TimerScreen} />
        <Tab.Screen name="Projects" component={ProjectsScreen} />
        <Tab.Screen name="Tools" component={ToolsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
