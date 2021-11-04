import React from 'react';
import { StyleSheet, View } from 'react-native';

import Timer from '../components/TimerScreen/Timer';

export default function TimerScreen() {
  return (
    <View style={styles.container}>
      <Timer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'beige',
  }
});
