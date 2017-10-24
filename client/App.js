/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Home from './src/components/Home'
import Login from './src/components/Login'

const Content = StackNavigator({
  Home: { screen: Home},
  Login: { screen: Login}
});


export default class App extends Component<{}> {
  render() {
    return (
        <Content />
    );
  }
}

const styles = StyleSheet.create({

});
