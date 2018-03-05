import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/components/Login';
import Profile from './app/components/Profile'
import Register from './app/components/Register'

const Application = StackNavigator({
    Home: { screen: Login },
    Profile: { screen: Profile },
    Register: { screen: Register },
  }, {
    navigationOptions: {
      header: false,
    }
 });

export default class App extends React.Component {
  render() {
    return (
      <Application />

    );
  }
}
