import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Heading from '../Heading';
import Task from './Task';

export default function TaskList() {
  return (
    <View>
      <Heading text="To-Do List" />
      <Task text={"Presentation"}/>
    </View>
  );
}

const styles = StyleSheet.create({

});
