import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import TimerTitle from './TimerTitle';
import Clock from './Clock';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // default value
      focusDuration: 25,
      shortDuration: 5,
      longDuration: 15,
      timerType: "Focus",
    }
  }

  handleCurrentTimer = () => {
    if (this.state.timerType === "Focus") {
      return this.state.focusDuration;
    } else if (this.state.timerType === "Short") {
      return this.state.shortDuration;
    } else if (this.state.timerType === "Long") {
      return this.state.longDuration;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TimerTitle
          timerType={this.state.timerType}
        />
        <Clock
          period={this.handleCurrentTimer()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
