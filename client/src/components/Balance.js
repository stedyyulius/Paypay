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
        <View style={styles.balance}>
          <Image source={{uri:'https://lh3.googleusercontent.com/0FMa5ISWzj-cme9TarH6MnWgYHiCJuHkJwAomAMrOhXfXTVabiq-ahkQteKMo4MYNA=w300'}} style={styles['logo-image']}/>
          <Text style={styles.balanceAmmount}>
            Balance: 200.000
          </Text>
        </View>
        <View style={styles.balance}>
          <Image source={{uri:'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/PAA-11269.jpg'}} style={styles['logo-image']}/>
          <Text style={styles.balanceAmmount}>
            Balance: 200.000
          </Text>
        </View>
        <View style={styles.balance}>
          <Image source={{uri:'https://image-assets-access.myfave.gdn/attachments/0c0b3ccb1b8d8e6e6973707ebe3def6c77a9e12e/store/fill/200/200/72417fcdbe5a79de5a336884d9d8c7a9a198c356b46632e3f4fbf5359353/logo.jpg'}} style={styles['logo-image']}/>
          <Text style={styles.balanceAmmount}>
            Balance: 200.000
          </Text>
        </View>
        <View style={styles.balance}>
          <Image source={{uri:'https://i.colnect.net/f/2929/927/e-Toll-Card.jpg'}} style={styles['logo-image']}/>
          <Text style={styles.balanceAmmount}>
            Balance: 200.000
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  'logo-image':{
    width: 150,
    height: 150,
    margin: 15
  },
  balance:{
    flexDirection: 'row'
  },
  balanceAmmount:{
    marginTop: 20,
  }
});
