<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Button } from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          raised
          icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: '#ff4f00', borderRadius: 10}}
          textStyle={{textAlign: 'center'}}
          title={`Welcome to\nReact Native Elements`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});
>>>>>>> a69bb6330aefd3770764064b53b24c52946b9053
