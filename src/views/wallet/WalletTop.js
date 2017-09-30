import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image, Button} from 'react-native';

export default class walletTop extends Component {
  render() {
    return (
      <View style = {styles.top}>
        <View style = {styles.walletInfo}>
          <Image style={styles.walletInfoBg} source={require('../../icons/bg_wallet.png')} />
          <Text style = {styles.walletInfoTitle}>账户余额 （元）</Text>
          <Text style = {styles.walletInfoMon}>1000.00</Text>
          <View style = {styles.walletInfoTipWrap}>
            <Image style = {styles.walletInfoTipWa} source = {require('../../icons/ic_biaoqian_top.png')} />
            <View style = {styles.walletInfoTip}>
              <Text style = {styles.walletInfoTipText}>金额储值入住享双倍积分</Text>
            </View>

          </View>
          <TouchableOpacity style={styles.walletInfoBut} onPress = {this.onPress} activeOpacity = {0.75}>
            <Text style = {styles.butText}>充值</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.walletCardList}>
          <TouchableOpacity style = {styles.walletCardLi} activeOpacity = {0.75} onPress = {this.onPress}>
            <Text style = {styles.walletCardNum}>4</Text>
            <Text style = {styles.walletCardTitle}>优惠券</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.walletCardLi} activeOpacity = {0.75} onPress = {this.onPress}>
            <Text style = {styles.walletCardNum}>100</Text>
            <Text style = {styles.walletCardTitle}>积分</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.walletCardLi} activeOpacity = {0.75} onPress = {this.onPress}>
            <Text style = {styles.walletCardNum}>1</Text>
            <Text style = {styles.walletCardTitle}>会员卡</Text>
          </TouchableOpacity>
        </View>
      </View>
    )

  }

  onPress = ()=>{

  }
}

const styles = {
  top:{
    width : '100%',
    height : 290,
    backgroundColor : '#fff',
  },
  walletInfo : {
    width : '100%',
    height : 230,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems: 'center'
  },
  walletInfoBg : {
    width : '100%',
    height : 230,
    position : 'absolute',
    top : 0,
    left : 0,
    zIndex : 1,
  },
  walletInfoTitle : {
    color : '#666',
    fontSize : 14,
    marginBottom : 10,
  },
  walletInfoMon : {
    color : '#333',
    fontSize : 45 ,
    marginBottom : 10,
  },
  walletInfoTipWrap : {
    width : 105,
    height : 25,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'flex-end',
  },
  walletInfoTip : {
    width : 105,
    height : 16,
    borderRadius : 10,
    backgroundColor : '#DBC094',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems: 'center'
  },
  walletInfoTipWa : {
    position : 'absolute',
    top : 0,
    left : (105-8.5)/2,
    width : 8.5,
    height : 8.5,
  },
  walletInfoTipText : {
    color : '#fff',
    fontSize : 8
  },
  walletInfoBut : {
    width : 100,
    height : 30,
    backgroundColor : '#fff',
    borderWidth : 2,
    borderColor : '#EB5E18',
    borderRadius : 6,
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 20,
  },
  butText : {
    color : '#EB5E18',
    fontSize : 15
  },
  walletCardList : {
    width : '100%',
    height : 60,
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
  },
  walletCardLi : {
    flex : 1,
    height : '80%',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(238,238,238,1)',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth : 0,
  },
  walletCardNum : {
    color : '#333',
    fontSize : 20 ,
    marginBottom : 5,
  },
  walletCardTitle : {
    color : '#666',
    fontSize : 11,
  }
}
