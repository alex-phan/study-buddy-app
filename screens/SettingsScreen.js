import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TimerSettings from '../components/SettingsScreen/TimerSettings';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <TimerSettings />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
