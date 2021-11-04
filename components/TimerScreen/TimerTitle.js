import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TimerTitle(props) {
  const { timerType } = props;

  function handleTimerTitle() {
    if (timerType === "Focus") {
      return "Time to Focus";
    } else if (timerType === "Short") {
      return "Time for a Short Break";
    } else if (timerType === "Long") {
      return "Time for a Long Break";
    }
  }

  let timerText = handleTimerTitle();

  return (
    <View>
      <Text>{timerText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
})
