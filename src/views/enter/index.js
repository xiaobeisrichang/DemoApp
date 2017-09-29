/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';
import MyTabBarComponent from './MyTabBar'
import BotaoNavComponent from './navigator'

export default class botao extends Component {
  render() {
    return (
        // <BotaoNavComponent></BotaoNavComponent>
      <MyTabBarComponent></MyTabBarComponent> 
    );
  }
}

const styles = StyleSheet.create({
});
