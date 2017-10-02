import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default class walletGoodsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      GoodsList:[
        {
          title : '积分兑换',
          goodsTitle : '半自动长柄高尔夫伞',
          price : '0',
          credits : '1000',
          goodsImage :'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
        },
        {
          title : '商城好物',
          goodsTitle : '简约双肩电脑包（商旅专用12344）',
          price : '188.50',
          credits : '3000',
          goodsImage :'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',

        }
      ]
    }
  }
  render() {
    return (
      <View style = { styles.walletGoodsWrap }>
        {this.state.GoodsList.map(this.ChildGoods)}
      </View>
    )
  }
  ChildGoods = (feed , key)=>{
    return (
      <TouchableOpacity key = {key} style={styles.walletGoodsLi} onPress = {this.onPress} activeOpacity = {0.75}>
        <View style = {styles.goodsListTitle}>
          <Text style = {styles.walletGoodsTitle}>{feed.title}</Text>
          <Image source = {require('../../icons/ic_more.png')} style = {styles.walletGoodsmores} />
        </View>
        <Image source = {{
        uri: feed.goodsImage
      }} style = {styles.walletGoodsImage} />
        <Text style = {styles.goodsName} numberOfLines={1}>{feed.goodsTitle}</Text>
        <Text style = {styles.goodsPrice}>{parseInt(feed.price)?'￥'+feed.price +'+' : ''}{parseInt(feed.credits) ? feed.credits+'积分':''}</Text>
      </TouchableOpacity>
    )
  }

  onPress = ()=>{

  }
}

const styles = {
  walletGoodsWrap:{
    marginTop : 10,
    width : '100%',
    height : 237.5,
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    backgroundColor : '#fff',
  },
  walletGoodsLi : {
    flex : 1,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems: 'center',
  },
  goodsListTitle : {
    display : 'flex',
    justifyContent : 'center',
    flexDirection : 'row',
    height : 50,
    width : '100%',
    alignItems : 'center',

  },
  goodsName : {
    height : 20,
    width : '80%',
  },
  walletGoodsImage : {
    width : 130,
    height : 86.5,
    marginTop : 18.5,
    marginBottom : 30
  },
  goodsPrice : {
    height : 18.5,
    marginBottom : 19,
    color : '#EB5E18',
  },
  walletGoodsTitle : {
    marginRight : 5
  }

}
