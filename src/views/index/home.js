import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';
import ScrollComponent from './scroll';
import BookComponent from './book';
import MenuComponent from './menuList';
import MenuTabComponent from './menuTab';
import HotelListComponent from './hotelList'
import BannerDisplayComponent from './bannerDispaly'

export default class home extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollViewStyle} showsVerticalScrollIndicator={true}>
        <View style={styles.container}>
          <ScrollComponent></ScrollComponent>
          <BookComponent></BookComponent>
          <MenuComponent></MenuComponent>
          <MenuTabComponent></MenuTabComponent>
          <BannerDisplayComponent></BannerDisplayComponent>
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
