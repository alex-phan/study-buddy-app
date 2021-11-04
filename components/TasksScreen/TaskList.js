import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, TextInput, Text, View, TouchableOpacity } from 'react-native';

import Heading from '../Heading';
import Task from './Task';

export default function TaskList() {
  const [task, addTask] = useState();
  const [items, addItems] = useState([]);

  const handleAddTask = () => {
    addItems([...items, task]); // adds items to an array
    addTask(null); // empties input area
  }

  const handleDeleteTask = (index) => {
    let itemsCopy = [...items];
    itemsCopy.splice(index, 1);
    addItems(itemsCopy);
  }

  return (
    <View>
      <ScrollView contentContainerStyle={{ // for scrollable list
        flexGrow: 1,
      }}>
        <View style={styles.heading}>
          <Heading text="To-Do List" />
        </View>
        <View style={styles.list}>
          {
            items.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.touchable}
                  onPress={() => handleDeleteTask(index)}
                >
                  <Task key={index} text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <TextInput
              style={styles.add}
              placeholder={"+ Add a Task"}
              value={task}
              onChangeText={text => addTask(text)}
              onEndEditing={() => handleAddTask()}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      
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
  container: {
    alignItems: 'center',
  },
  add: {
    marginBottom: 10,
    width: '95%',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
    textAlign: 'center',
  },
  touchable: {
    width: '100%',
    alignItems: 'center',
  },
});
