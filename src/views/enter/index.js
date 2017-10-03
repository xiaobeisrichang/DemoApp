/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView, TouchableHighlight} from 'react-native';
import BotaoNavComponent from './navigator';
import SimpleAppComponent from './naviDemo/HomePage';


export default class botao extends Component {
  render() {

    return (
         <BotaoNavComponent></BotaoNavComponent>
      //<SimpleAppComponent></SimpleAppComponent>
    );
  }

  _onPress = () => {
    this.props.navigator.push(this.props.routes[this.props.route.index+1])
  }
}

const styles = StyleSheet.create({
});
