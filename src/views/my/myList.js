import React , { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

export default class myList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list : [
        [
          {
            icon : require('../../icons/ic_wddd.png'),
            title : '我的订单',
            tips : '酒店、旅行、铂物馆订单'
          }
        ],
        [
          {
            icon : require('../../icons/ic_wdfp.png'),
            title : '我的发票',
            tips : ''
          },
          {
            icon : require('../../icons/ic_wdcyxx.png'),
            title : '常用信息',
            tips : '常用旅客/地址'
          },
          {
            icon : require('../../icons/ic_wddp.png'),
            title : '我的点评',
            tips : ''
          },
          {
            icon : require('../../icons/ic_wdsc.png'),
            title : '我的收藏',
            tips : ''
          }
        ],
        [
          {
            icon : require('../../icons/ic_wdqysl.png'),
            title : '企业商旅',
            tips : ''
          },
          {
            icon : require('../../icons/ic_wdkefubz.png'),
            title : '客服帮助',
            tips : ''
          },
          {
            icon : require('../../icons/ic_wdlxgj.png'),
            title : '旅行管家',
            tips : ''
          },
          {
            icon : require('../../icons/ic_wdhdht.png'),
            title : '互动话题',
            tips : ''
          },
          {
            icon : require('../../icons/ic_wdyjfk.png'),
            title : '意见反馈',
            tips : ''
          }
        ]
      ]
    }
  }

  render() {
    return (
      <View style = {styles.myListWrap}>
        {this.state.list.map(this.listWrap)}
      </View>
    )
  }

  listWrap = (feed, key) => {
    return (
      <View key = {key} style = {styles.listWrap}>
        {feed.map(this.childrenLi)}
      </View>
    )
  }

  childrenLi = (feed , key) => {
    return (
      <TouchableOpacity activeOpacity = {0.8} key = {key} style = {styles.li} onPress = {this.onPress} >
        <Image style = {styles.icon}
          source = {feed.icon}
        />
        <Text style = {styles.title}>{feed.title}</Text>
        <Text style = {styles.tips}>{feed.tips}</Text>
          <Image style = {styles.userRightIcon} source = {require('../../icons/ic_arrow.png')} />
      </TouchableOpacity>
    )
  }

  onPress = () => {

  }
}

const styles = StyleSheet.create({
  myListWrap : {
     width : '100%',
     display : 'flex',
     flexDirection : 'column',
     justifyContent : 'center',
     alignItems: 'center',
     marginTop : 58,
  },
  listWrap : {
    width : '100%',
    backgroundColor : '#fff',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems: 'center',
    marginTop : 10,
  },
  li : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-start',
    alignItems: 'center',
    width : '100%',
    height : 50,
    backgroundColor : '#fff',
  },
  icon : {
    width : 15,
    height : 15,
    marginLeft : 15,
    marginRight : 15,
  },
  title : {
    color : '#333',
    fontSize :15,
  },
  tips : {
    color : '#ccc',
    fontSize : 12,
    position : 'absolute',
    right : 35.5,
  },
  userRightIcon : {
    width : 6.1,
    height : 11.7,
    position : 'absolute',
    right : 14.6,
  }
})
