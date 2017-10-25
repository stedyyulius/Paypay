
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from 'react-native';

import Home from './Home'

export default class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      username: ''
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>
          Login
        </Text>
        <TextInput
         style={{height: 50, borderColor: 'gray', borderWidth: 1,width: 100}}
         onChangeText={(e) => this.setState({username: e})}
         value={this.state.username}
       />
        <Button
        title="Login"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  'logo-image':{
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 15
  },
  'logo-container':{
    flexDirection: 'row'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
