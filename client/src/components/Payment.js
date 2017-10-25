
import React, { Component } from 'react';
import QRCode from 'react-native-qrcode';
import Modal from 'react-native-modal'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  TextInput
} from 'react-native';


export default class Payment extends Component{
  constructor(props){
    super(props)
      this.state={
        text: "{name: Stedy,id: 1,paymentType: Go-Pay}",
        isQr: false,
        modalVisible: false,
        merchantName: ""
      }
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Paypay Payment`,
    headerTitleStyle: {
      alignSelf: 'center'
    }
  })

  componentDidMount(){
    let transactionDetail = {
      name        : 'Stedy',
      Items       : [{susu: 12000},{daging: 70000}],
      paymentType : this.props.navigation.state.params.paymentType
    }
    this.setState({
      text: JSON.stringify(transactionDetail)
    })
  }

  generateQr(){
    this.setState({
      isQr: true,
    })
  }

  sendQr(){
    this.setState({
      isQr: false,
      modalVisible: false
    })
    alert(`Qr Sent to ${this.state.merchantName}`)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
        <View style={styles.container}>
          <Text>
            Enter Merchant Name
          </Text>
          <TextInput
           style={{height: 50, borderColor: 'gray', borderWidth: 1,width: 100}}
           onChangeText={(e) => this.setState({merchantName: e})}
           value={this.state.merchantName}
         />
         <Button
           onPress={()=>this.sendQr()}
           title="Send" />
         </View>
        </Modal>
        <Button
          style={styles.content}
          onPress={()=>this.generateQr()}
          title="Generate Qr" />
        {(this.state.isQr)
        ? <View style={styles.content}>
            <QRCode
             value={this.state.text}
             size={200}
             bgColor='blue'
             fgColor='white'/>
             <View style={styles.content}>
               <Button
                 onPress={()=> this.setState({modalVisible: 'visible'})}
                 title="Send Qr To Merchant"
               />
            </View>
          </View>
        : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  content:{
    margin: 20
  }
});
