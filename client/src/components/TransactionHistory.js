import React, { Component } from 'react';
import { Card, ListItem, Button } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const transactionHistory = [
 {
    name: 'Babi Panggang Sambal Mattah',
    avatar: 'https://img.qraved.co/v2/image/data/2016/05/05/celengan_bdg-20160505-0001.jpg',
    price: 50000
 },
]

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
        <Card title="Transaction History">
        {
          transactionHistory.map((th, i) => {
            return (
              <View key={i} style={styles.transaction}>
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: th.avatar }}
                  />
                <View style={styles.detail}>
                  <Text style={styles.name}>{th.price}</Text>
                  <Text style={styles.name}>{th.name}</Text>
                </View>
              </View>
            );
          })
        }
      </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  transaction:{
    flexDirection: 'row'
  },
  image:{
    width: 50,
    height: 50
  },
  detail:{
    flexDirection: 'column',
    margin: 10
  }
});
