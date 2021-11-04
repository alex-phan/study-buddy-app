import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import TimerTitle from './TimerTitle';
import ClockDisplay from './ClockDisplay';
import ControlButton from './ControlButton';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      paused: false,
      skipped: false,
      time: this.props.period * 60, // convert minutes to seconds
    }
  }

  handleCountdown = () => {
    this.clockInterval = setInterval(() => {
      this.setState({
        time: this.state.time - 1, // decrement seconds by one
      });
      if (this.state.time < 1 || this.state.skipped) {
        clearInterval(this.clockInterval);
        this.props.complete();
        this.setState({
          running: false,
          skipped: false,
          time: this.props.period * 60,
        });
      }
    }, 1000); // in milliseconds
  }

  handleStart = () => {
    this.setState({
      running: true,
      paused: false,
    });
    this.handleCountdown();
  }

  handlePause = () => {
    clearInterval(this.clockInterval);
    this.setState({
      running: false,
      paused: true,
    });
  }

  handleSkip = () => {
    this.setState({
      skipped: true,
    })
  }

  handleReset = () => {
    clearInterval(this.clockInterval);
    this.setState({
      paused: false,
      time: this.props.period * 60,
    });
  }

  render() {
    return (
      <View>
        <TimerTitle
          timerType={this.props.timerType}
        />
        <ClockDisplay
          time={this.state.time}
        />
        <ControlButton
          running={this.state.running}
          paused={this.state.paused}
          start={this.handleStart}
          pause={this.handlePause}
          skip={this.handleSkip}
          reset={this.handleReset}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
