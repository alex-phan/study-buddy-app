import React, { Component } from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default class ControlButton extends Component {
  render() {
    if (this.props.running) {
      return (
        <View style={styles.container}>
          <Pressable style={[styles.control, styles.interrupt]} onPress={this.props.pause}>
            <Text style={styles.content}>Pause</Text>
          </Pressable>
          <Pressable style={[styles.control, styles.next]} onPress={this.props.skip}>
            <Text style={styles.content}>Skip</Text>
          </Pressable>
        </View>
      );
    } else if (this.props.paused) {
      return (
        <View style={styles.container}>
          <Pressable style={[styles.control, styles.continue]} onPress={this.props.start}>
            <Text style={styles.content}>Resume</Text>
          </Pressable>
          <Pressable style={[styles.control, styles.interrupt]} onPress={this.props.reset}>
            <Text style={styles.content}>Reset</Text>
          </Pressable>
        </View>
      );
    } else {
      return (
        <View>
          <Pressable style={[styles.control, styles.continue]} onPress={this.props.start}>
            <Text style={styles.content}>Start</Text>
          </Pressable>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  control: {
    margin: 12,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 10,
  },
  continue: {
    backgroundColor: 'green',
  },
  interrupt: {
    backgroundColor: 'brown',
  },
  next: {
    backgroundColor: 'navy',
  },
  content: {
    textAlign: 'center',
    color: 'white',
  },
});
