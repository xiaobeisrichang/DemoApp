import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

export default class walletAd extends Component {
  render() {
    return (
      <View style = {styles.walletAdWrap}>
        <Image style = {styles.walletAd}  source = {require('../../resource/walletAd.jpg')} />
      </View>
    )

  }
}

const styles = StyleSheet.create({
  walletAdWrap:{
    width : '100%',
    height : 100,
    marginTop : 10,
    marginBottom : 50,
  },
  walletAd:{
    width : '100%',
    height : 100,
  }
})
