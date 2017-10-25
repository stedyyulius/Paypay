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


export default class App extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: `Paypay`,
    headerTitleStyle: {
      alignSelf: 'center'
    }
  })

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Image style={styles.container} source={require('../assets/fire.jpeg')}>
        <View style={styles['logo-container']}>
          <TouchableOpacity onPress={()=> navigate('Login',{})}>
            <Image source={{uri:'https://lh3.googleusercontent.com/0FMa5ISWzj-cme9TarH6MnWgYHiCJuHkJwAomAMrOhXfXTVabiq-ahkQteKMo4MYNA=w300'}} style={styles['logo-image']}/>
          </TouchableOpacity>
          <Image source={{uri:'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/PAA-11269.jpg'}} style={styles['logo-image']}/>
        </View>
        <View style={styles['logo-container']}>
          <Image source={{uri:'https://image-assets-access.myfave.gdn/attachments/0c0b3ccb1b8d8e6e6973707ebe3def6c77a9e12e/store/fill/200/200/72417fcdbe5a79de5a336884d9d8c7a9a198c356b46632e3f4fbf5359353/logo.jpg'}} style={styles['logo-image']}/>
          <Image source={{uri:'https://i.colnect.net/f/2929/927/e-Toll-Card.jpg'}} style={styles['logo-image']}/>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: null,
    height: null
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
