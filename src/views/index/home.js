import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';
import ScrollComponent from '../index/scroll';
import BookComponent from '../index/book';
import MenuComponent from '../index/menuList';
import MenuTabComponent from '../index/menuTab';
import HotelListComponent from '../index/hotelList'

export default class home extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollViewStyle} showsVerticalScrollIndicator={true}>
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
