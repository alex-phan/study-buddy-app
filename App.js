import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Navigation from './components/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
