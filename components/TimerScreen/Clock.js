import React, { Component } from 'react';
import { View } from 'react-native';

import ClockDisplay from './ClockDisplay';
import ControlButton from './ControlButton';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      paused: false,
      time: this.props.period * 60, // convert minutes to seconds
    }
  }

  handleStart = () => {
    this.setState({
      running: true,
      paused: false,
    });
    this.clockInterval = setInterval(() => {
      this.setState({
        time: this.state.time - 1, // decrement seconds by one
      });
      if (this.state.time < 1) {
        clearInterval(this.clockInterval);
        this.setState({
          running: false,
          time: this.props.period * 60, // reset countdown
        });
      }
    }, 1000); // in milliseconds
  }

  handlePause = () => {
    clearInterval(this.clockInterval);
    this.setState({
      running: false,
      paused: true,
    });
  }

  render() {
    return (
      <View>
        <ClockDisplay
          time={this.state.time}
        />
        <ControlButton
          start={this.handleStart}
          pause={this.handlePause}
        />
      </View>
    );
  }
}
