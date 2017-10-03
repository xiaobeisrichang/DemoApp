import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';

export default class recharge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseList : [
        {
          monTitle : '1500元',
          monTips : '立升金卡、500元优惠券'
        },
        {
          monTitle : '800元',
          monTips : '送10元券'
        },
        {
          monTitle : '500元',
          monTips : '送10元券'
        },
        {
          monTitle : '其他金额',
          monTips : '充值立享优惠'
        }
      ]
    }
  }

  static navigationOptions = {
    title : '我的余额'
  }

  render() {
    return (
      <ScrollView style={styles.scrollViewStyle} showsVerticalScrollIndicator={true}>
        <View style={styles.container}>
          <View style = {styles.remains}>
            <Text style = {styles.remainsTitle}>当前余额（元）</Text>
            <Text style = {styles.remainsMon}>1000.00</Text>
          </View>
          <Text>- 余额充值 -</Text>
          <View style = {styles.monChoose}>
            {this.state.chooseList.map(this.childChoose)}
          </View>
          <Text>余额充值最低1元，单次最高2000元。具体限额以支付平台和发卡行规定为准。</Text>
          <Text>我已阅读并理解《充值服务协议》</Text>
          <TouchableOpacity>
            <Text>立即充值</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }

  childChoose = (feed,key) => {
    return (
      <TouchableOpacity onPress = {this.onPress} style = {styles.chooseLi}>
        <Text style = {styles.mainMon}>1500元</Text>
        <Text style = {styles.monTips}>立升金卡、500元优惠</Text>
      </TouchableOpacity>
    )
  }

  onPress = () => {}
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
