import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

import Clock from './Clock';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusDuration: 25,
      shortDuration: 5,
      longDuration: 15,
      longInterval: 4,
      timerType: "Focus", // starting timer
      pomoCount: 1, // starting value
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

  // switch to the next timer
  handleNextTimer = () => {
    if (this.state.timerType === "Focus") {
      if (this.state.pomoCount === this.state.longInterval) {
        this.setState({
          timerType: "Long",
          pomoCount: 0,
        });
      } else {
        this.setState({
          timerType: "Short",
        });
      }
    } else {
      this.setState({
        timerType: "Focus",
        pomoCount: this.state.pomoCount + 1,
      });
    }
  }

  render() {
    return (
      <View>
        <Text>Focus Duration</Text>
        <TextInput 
          placeholder="How many minutes?"
          keyboardType="numeric"
          defaultValue={"" + this.state.focusDuration}
          onChangeText={(text) => {
            if (text > 0) {
              this.setState({
                focusDuration: text,
              });
            }
          }}
        />

        <Clock
          timerType={this.state.timerType}
          period={this.handleCurrentTimer()}
          complete={this.handleNextTimer}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
