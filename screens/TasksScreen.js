import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TaskList from '../components/TasksScreen/TaskList';

export default function ProjectsScreen() {
  return (
    <View style={styles.container}>
      <TaskList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
  }
});
