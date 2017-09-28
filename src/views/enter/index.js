/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import ScrollComponent from '../index/scroll';
import BookComponent from '../index/book';
import MenuComponent from '../index/menuList';
import MenuTabComponent from '../index/menuTab';
import HotelListComponent from '../index/hotelList'


export default class botao extends Component {
  render() {
    return (
      <ScrollView style = {styles.scrollViewStyle} showsVerticalScrollIndicator={true} >
      <View style={styles.container}>
        <ScrollComponent></ScrollComponent>
        <BookComponent></BookComponent>
        <MenuComponent></MenuComponent>
        <MenuTabComponent></MenuTabComponent>
        <HotelListComponent></HotelListComponent>


      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewStyle: {
      position:'relative',
      top:0,
      left:0
  },
  container: {
    flex: 1,
    backgroundColor:'#eeeeeeee'
  },
  products: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  }

});
