import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

import Clock from './Clock';
import Heading from '../Heading';

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

  handleFocusDuration = (text) => {
    if (text > 0) {
      this.setState({
        focusDuration: text,
      });
    }
  }
  
  handleShortDuration = (text) => {
    if (text > 0) {
      this.setState({
        shortDuration: text,
      });
    }
  }

  handleLongDuration = (text) => {
    if (text > 0) {
      this.setState({
        longDuration: text,
      });
    }
  }

  handleLongInterval = (text) => {
    if (text > 0) {
      this.setState({
        longInterval: text,
      });
    }
  }

  render() {
    return ( 
      <View style={styles.container}>
        <Clock
          style={styles.timer}
          timerType={this.state.timerType}
          period={this.handleCurrentTimer()}
          complete={this.handleNextTimer}
        />

        <View style={styles.settings}>
          <Heading text="Timer Settings (mins)" />
          <View style={styles.duration}>
            <View style={styles.option}>
              <Text style={styles.label}>Focus Duration</Text>
              <TextInput 
                style={styles.input}
                keyboardType="numeric"
                defaultValue={"" + this.state.focusDuration}
                onChangeText={this.handleFocusDuration}
              />
            </View>
            <View style={styles.option}>
              <Text style={styles.label}>Short Duration</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                defaultValue={"" + this.state.shortDuration}
                onChangeText={this.handleShortDuration}
              />
            </View>
            <View style={styles.option}>
              <Text style={styles.label}>Long Duration</Text>
              <TextInput 
                style={styles.input}
                keyboardType="numeric"
                defaultValue={"" + this.state.longDuration}
                onChangeText={this.handleLongDuration}
              />
            </View>
          </View>
          <View style={styles.option}>
            <Text style={styles.label}>Long Interval</Text>
            <TextInput 
              style={styles.input}
              keyboardType="numeric"
              defaultValue={"" + this.state.longInterval}
              onChangeText={this.handleLongInterval}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  settings: {
    position: 'absolute',
    marginTop: '95%',
    alignItems: 'center',
  },  
  duration: {
    flexDirection: 'row',
  },
  option: {
    margin: 10,
  },
  label: {
    marginBottom: 2,
  },
  input: {
    width: 100,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 4,
  },
});
