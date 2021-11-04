import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Clock from './Clock';

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // default value
      focusDuration: 25,
    }
  }

  render() {
    return (
      <View>
        <Clock
          period={this.state.focusDuration}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
