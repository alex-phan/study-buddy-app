import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ClockDisplay extends Component {
  render() {
    return (
      <View>
        <Text style={styles.clock}>
          {Math.floor(this.props.time / 60).toString().padStart(2, "0") +
          ":" +
          (this.props.time % 60).toString().padStart(2, "0")}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  clock: {
    fontSize: 50,
  }
});
