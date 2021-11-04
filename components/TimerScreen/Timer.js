import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import TimerTitle from './TimerTitle';
import Clock from './Clock';

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // default value
      focusDuration: 25,
      timerType: "Focus",
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TimerTitle
          timerType={this.state.timerType}
        />
        <Clock
          period={this.state.focusDuration}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
});
