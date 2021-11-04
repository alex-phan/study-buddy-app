import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Task(props) {
  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <Ionicons style={styles.checkbox} name="checkbox-outline" />
        <Text style={styles.content}>{props.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 5,
    width: '95%',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 8,
    fontSize: 24,
  }
});
