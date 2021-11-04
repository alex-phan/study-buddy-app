import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';

export default function Heading(props) {
  const { text } = props;

  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View>
        <Text style={styles.heading}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    margin: 10,
    fontFamily: 'Lobster_400Regular',
    fontSize: 30,
    color: 'brown',
  },
});
