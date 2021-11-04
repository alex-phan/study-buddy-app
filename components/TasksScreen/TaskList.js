import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';

import Heading from '../Heading';
import Task from './Task';

export default function TaskList() {
  return (
    <View style={styles.container}>
      <Heading text="To-Do List" />
      <Task text={"Presentation"}/>
      <Task text={"Simulation Project"}/>

      <TextInput placeholder={"Add a Task"} onChangeText={text => addTask(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
});
