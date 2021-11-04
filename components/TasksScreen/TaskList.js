import React from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, TextInput, Text, View, TouchableOpacity, Keyboard } from 'react-native';

import Heading from '../Heading';
import Task from './Task';

export default function TaskList() {
  return (
    <View>
      <ScrollView contentContainerStyle={{ // for scrollable list
        flexGrow: 1,
      }}>
        <View style={styles.heading}>
          <Heading text="To-Do List" />
        </View>
        <View style={styles.list}>
          <Task text={"Presentation"}/>
          <Task text={"Simulation Project"}/>
        </View>
      </ScrollView>

      <View style={styles.wrapper}>
        <TextInput style={styles.add} placeholder={"+ Add a Task"} onChangeText={text => addTask(text)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    alignItems: 'center',
  },
  list: {
    alignItems: 'center',
  },
  wrapper: {
    alignItems: 'center',
  },
  add: {
    position: 'relative',
    width: '95%',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
    textAlign: 'center',
  }
});
