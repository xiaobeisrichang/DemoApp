import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';

import WalletTopComponent from './WalletTop';
import WalletTabComponent from './WalletTab';
import WalletGoodsListComponent from './WalletGoodsList';
import WalletAdComponent from './WalletAd'

export default class wallet extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollViewStyle} showsVerticalScrollIndicator={true}>
        <View style={styles.container}>
        <WalletTopComponent></WalletTopComponent>
        <WalletTabComponent></WalletTabComponent>
        <WalletGoodsListComponent></WalletGoodsListComponent>
        <WalletAdComponent></WalletAdComponent>
      </View>
      </ScrollView>

    )

  }
}

const styles = StyleSheet.create({
  scrollViewStyle: {
    position: 'relative',
    top: 0,
    left: 0,
    backgroundColor:'#eee',
  },
  container: {
    flex: 1,
    backgroundColor: '#eeeeeeee'
  },

});
