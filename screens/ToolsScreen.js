import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ToolsScreen() {
  return (
    <View style={styles.container}>
      <Text>Tools</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
  }
});
