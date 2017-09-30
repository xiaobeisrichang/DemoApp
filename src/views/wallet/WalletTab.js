import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default class walletTab extends Component {
  constructor(props){
    super(props)
    this.state = {
      tabList:[
        {
          title : '发票',
          icon : require('../../icons/ic_qbfp.png')
        },
        {
          title : '礼品卡',
          icon : require('../../icons/ic_qblpk.png')
        },
        {
          title : '冲流量',
          icon : require('../../icons/ic_qbcll.png')
        },
        {
          title : '办信用卡',
          icon : require('../../icons/ic_qbbxyk.png')
        }
      ]
    }
  }
  render() {
    return (
      <View style = { styles.walletTabWrap }>
        {this.state.tabList.map(this.Childtab)}
      </View>
    )
  }
  Childtab = (feed , key)=>{
    return (
      <TouchableOpacity key = {key} style={styles.walletTabLi} onPress = {this.onPress} activeOpacity = {0.75}>
        <Image source = {feed.icon} style = {styles.walletTabIcon} />
        <Text>{feed.title}</Text>
      </TouchableOpacity>
    )
  }

  onPress = ()=>{

  }
}

const styles = {
  walletTabWrap:{
    marginTop : 10,
    width : '100%',
    height : 80,
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    backgroundColor : '#fff',
  },
  walletTabLi : {
    flex : 1,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems: 'center',
  },
  walletTabIcon : {
    width : 25 ,
    height : 25 ,
    marginBottom : 15,
  },
  walletTabTitle : {
    color : '#333',
    fontSize : 13,
  }
}
