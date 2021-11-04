import React, { Component } from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';

export default class ControlButton extends Component {
  render() {
    if (this.props.running) {
      return (
        <View>
          <Pressable onPress={this.props.pause}>
            <Text>Pause</Text>
          </Pressable>
        </View>
      )
    } else if (this.props.paused) {
      return (
        <View>
          <Pressable onPress={this.props.start}>
            <Text>Resume</Text>
          </Pressable>
        </View>
      )
    } else {
      return (
        <View>
          <Pressable onPress={this.props.start}>
            <Text>Start</Text>
          </Pressable>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({

});
