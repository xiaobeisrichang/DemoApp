import React, {Component} from 'react';
import {Animated, Easing, View, StyleSheet, Image} from 'react-native';

import Swiper from 'react-native-swiper'

export default class scroll extends Component {

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={true} autoplay={true}>
        <View style={styles.slide}>
          <Image style={styles.image} source={require("../../resource/2.jpeg")}/>
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={require("../../resource/3.jpeg")}/>
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={require("../../resource/4.jpeg")}/>
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={require("../../resource/5.jpg")}/>
        </View>
      </Swiper>
    )

  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 185
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  image:{
    width:'100%',
    height:185
  }
});
