import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native'

export default function TimerSettings() {
  return (
    <View>
      <Text>Focus Duration</Text>
      <TextInput
        placeholder="Focus Duration"
        keyboardType="numeric"
      />
      <Text>Short Duration</Text>
      <TextInput
        placeholder="Short Duration"
        keyboardType="numeric"
      />
      <Text>Long Duration</Text>
      <TextInput
        placeholder="Long Duration"
        keyboardType="numeric"
      />
      <Text>Long Interval</Text>
      <TextInput
        placeholder="Long Interval"
        keyboardType="numeric"
      />
    </View>
  )
}

const styles = StyleSheet.create({})
