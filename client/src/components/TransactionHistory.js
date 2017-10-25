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
  View,
  Image,
  TouchableOpacity
} from 'react-native';


export default class Home extends Component{
  static navigationOptions = ({ navigation }) => ({
    title: `Transaction History`,
    headerTitleStyle: {
      alignSelf: 'center'
    }
  })

  render() {
    return (
      <View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

});
