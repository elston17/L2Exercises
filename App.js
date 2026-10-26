import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Exercise 1 & 3: function component that accepts "code" and "name" properties
const Welcome = (props) => {
  return <Text>Welcome to {props.code} - {props.name}</Text>;
};

// Exercise 2 & 3: class component that lists the modules
class ModuleInfo extends Component {
  render() {
    return (
      <View>
        <Text>These are my modules this semester:</Text>
        <Welcome code="C346" name="Mobile App Development" />
        <Welcome code="C105" name="Introduction to Programming" />
        <Welcome code="C337" name="Immersive Technologies" />
      </View>
    );
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
