/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Home from './src/components/Home'
import Login from './src/components/Login'
import Payment from './src/components/Payment'

const Content = StackNavigator({
  Home: { screen: Home},
  Login: { screen: Login},
  Payment: {screen: Payment}
});


export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      selectedTab: 'home'
    }
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image source={{uri:'https://images.vexels.com/media/users/3/143188/isolated/preview/5f44f3160a09b51b4fa4634ecdff62dd-money-icon-by-vexels.png'}} />}
          renderSelectedIcon={() => <Image source={{uri:'https://images.vexels.com/media/users/3/143188/isolated/preview/5f44f3160a09b51b4fa4634ecdff62dd-money-icon-by-vexels.png'}} />}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Content />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'transaction'}
          title="Profile"
          renderIcon={() => <Image source={{uri:'http://www.freeiconspng.com/uploads/legal-information-8.png'}} />}
          renderSelectedIcon={() => <Image source={{uri:'http://www.freeiconspng.com/uploads/legal-information-8.png'}} />}
          onPress={() => this.setState({ selectedTab: 'transaction' })}>
          <Login />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  app:{
    backgroundColor: 'black'
  }
});
