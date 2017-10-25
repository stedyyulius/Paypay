/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Dimensions } from 'react-native'

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
import TransactionHistory from './src/components/TransactionHistory'
import Balance from './src/components/Balance'

const Content = StackNavigator({
  Home: { screen: Home},
  Payment: {screen: Payment},
});

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

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
              renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
              renderSelectedIcon={() => <Icon name="home" size={px2dp(22)} color="#3496f0"/>}
              // badgeText="1"
              onPress={() => this.setState({ selectedTab: 'home' })}>
              <Content />
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'transaction'}
              title="Transaction History"
              renderIcon={() => <Icon name="history" size={px2dp(22)} color="#666"/>}
              renderSelectedIcon={() => <Icon name="history" size={px2dp(22)} color="#3496f0"/>}
              onPress={() => this.setState({ selectedTab: 'transaction' })}>
              <TransactionHistory />
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'Balance'}
              title="Balance"
              renderIcon={() => <Icon name="usd" size={px2dp(22)} color="#666"/>}
              renderSelectedIcon={() => <Icon name="usd" size={px2dp(22)} color="#3496f0"/>}
              onPress={() => this.setState({ selectedTab: 'Balance' })}>
              <Balance />
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
