import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';

export default function TimerTitle(props) {
  const { timerType } = props;

  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });

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

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View>
        <Text style={styles.title}>{timerText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
      marginBottom: 10,
      fontFamily: 'Lobster_400Regular',
      fontSize: 30,
      color: 'brown',
    }
})
