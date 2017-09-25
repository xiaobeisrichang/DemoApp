import React,{Component} from 'react';
import {
  Animated,
  Easing,
  View,
  StyleSheet,
  Text
} from 'react-native';

import Swiper from 'react-native-swiper'

export default class scroll extends Component {

  render(){
    return(
      <Swiper style={styles.wrapper} showsButtons={false} loop={true} autoplay={true}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
    )

  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 185,
    },
    slide1: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
});
