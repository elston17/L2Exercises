import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Exercise 2: class component named ModuleInfo
class ModuleInfo extends Component {
  render() {
    return <Text>These are my modules this semester:</Text>;
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <ModuleInfo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
});
