import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';

import HomeComponent from '../index/home';
import WalletComponent from '../wallet/wallet';
import MessageComponent from '../message/message';
import MyComponent from '../my/my'

class HomePage extends Component {
  static navigationOptions = {
    title: '铂涛旅行'
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <HomeComponent></HomeComponent>
    )
  }
}



class WalletPage extends Component {
  static navigationOptions = {
    title: '钱包'
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <WalletComponent></WalletComponent>
    )
  }
}

class MessagePage extends Component {
  static navigationOptions = {
    title: '消息'
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <MessageComponent></MessageComponent>
    )
  }
}

class MyPage extends Component {
  static navigationOptions = {
    title: '我的'
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <MyComponent></MyComponent>
    )
  }
}

const MainScreenNavigator = TabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({tintColor}) =>
      (<Image
        source={require('../../icons/ic_ home_default.png')}
        style={[
        {
          tintColor: tintColor
        },
        styles.icon
      ]}/>)
    }
  },
    wallet: {
      screen : WalletPage,
      navigationOptions : {
        tabBarLabel : '钱包',
        tabBarIcon : ({tintColor}) =>
        (<Image
          source={require('../../icons/ic_ wallt_default.png')}
          style={[
          {
            tintColor: tintColor
          },
          styles.icon
        ]}/>)
      }
    },
      message: {
        screen : MessagePage,
        navigationOptions : {
          tabBarLabel : '消息',
          tabBarIcon : ({tintColor}) =>
          (<Image
            source={require('../../icons/ic_ news_default.png')}
            style={[
            {
              tintColor: tintColor
            },
            styles.icon
          ]}/>)
        }
      },
        my: {
          screen : MyPage,
          navigationOptions : {
            tabBarLabel : '我的',
            tabBarIcon : ({tintColor}) =>
            (<Image
              source={require('../../icons/ic_ wode_default.png')}
              style={[
              {
                tintColor: tintColor
              },
              styles.icon
            ]}/>)
          }
        }
}, {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#008AC9', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style: {
            backgroundColor: '#fff', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 12, // 文字大小
        },
    },
}
)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
    },
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});

const Navigator = StackNavigator({
    Home: {screen: MainScreenNavigator},
    wallet:{screen : WalletComponent},
    message :{screen : MessageComponent},
    my : {screen : MyComponent}

});

export default Navigator;
