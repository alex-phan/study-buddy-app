import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ClockDisplay from './ClockDisplay';

export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: this.props.period * 60, // convert minutes to seconds
    }
  }

  render() {
    return (
      <View>
        <ClockDisplay
          time={this.state.time}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
