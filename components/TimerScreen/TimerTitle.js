import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TimerTitle(props) {
  const { timerType } = props;

  return (
    <View>
      <Text>Time to {timerType}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
})
