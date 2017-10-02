import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';

import MyTopComponent from './myTop';
import MyListComponent from './myList'
export default class my extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollViewStyle} showsVerticalScrollIndicator={true}>
        <View style={styles.container}>
        <MyTopComponent></MyTopComponent>
        <MyListComponent></MyListComponent>
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
