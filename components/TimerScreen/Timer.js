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

  // pair timer type with set duration
  handleCurrentTimer = () => {
    if (this.state.timerType === "Focus") {
      return this.state.focusDuration;
    } else if (this.state.timerType === "Short") {
      return this.state.shortDuration;
    } else if (this.state.timerType === "Long") {
      return this.state.longDuration;
    }
  }

  // switch to next timer
  handleNextTimer = () => {
    if (this.state.timerType === "Focus") {
      this.setState({
        timerType: "Short",
      });
    } else {
      this.setState({
        timerType: "Focus",
      });
    }
  }

  render() {
    let time = this.handleCurrentTimer();
    return (
      <View>
        <TimerTitle
          timerType={this.state.timerType}
        />
        <Clock
          period={time}
          complete={this.handleNextTimer}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
