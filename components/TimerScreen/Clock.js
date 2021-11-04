import React, { Component } from 'react';
import { View } from 'react-native';

import ClockDisplay from './ClockDisplay';
import ControlButton from './ControlButton';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      time: this.props.period * 60, // convert minutes to seconds
    }
  }

  handleStart = () => {
    this.setState({
      running: true,
    });
    this.clockInterval = setInterval(() => {
      this.setState({
        time: this.state.time - 1, // decrement seconds by one
      });
      if (this.state.time < 1) {
        this.setState({
          running: false,
        });
      }
    }, 1000); // in milliseconds
  }

  render() {
    return (
      <View>
        <ClockDisplay
          time={this.state.time}
        />
        <ControlButton
          start={this.handleStart}
        />
      </View>
    );
  }
}
