import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';

import HomeComponent from '../index/home';
import WalletComponent from '../wallet/wallet';
import MessageComponent from '../message/message';
import MyComponent from '../my/my'

export default class botaoTabBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedItem : 'home'
    }
  }
  render() {
    return (
      <TabBarIOS
        barTintColor = 'white'
        tintColor = 'orange'
        unselectedItemTintColor = '#333'
        translucent = {true}
        >
          <TabBarIOS.Item
            title = '首页'
            icon  = {require('../../icons/ic_ home_default.png')}
            selectedIcon = {require('../../icons/ic_home_selected.png')}
            selected = {this.state.selectedItem === 'home'}
            onPress = { () => {this.setState({selectedItem:'home'})}}
            >
              <NavigatorIOS
                  style={{flex:1}}
                  barTintColor = 'white'
                  initialRoute = {{
                    component : HomeComponent,
                    title : '铂涛旅行'
                  }}
                  configureScene = {(route) => {
                    return NavigatorIOS.SceneConfigs.FloatFromBottom;
                  }
                }
                renderScene = { (route, navigator) => {
                  let Home = route.component;
                  return <HomeComponent navigator = {navigator} />
                }}
                >

              </NavigatorIOS>

          </TabBarIOS.Item>
          <TabBarIOS.Item
            title = '钱包'
            icon = {require('../../icons/ic_ wallt_default.png')}
            selectedIcon = {require('../../icons/ic_wallt_selected.png')}
            selected = { this.state.selectedItem === 'wallet'}
            onPress = { ()=> {this.setState({ selectedItem : 'wallet'})}}
            >
              <WalletComponent></WalletComponent>


          </TabBarIOS.Item>
          <TabBarIOS.Item
            title = '消息'
            icon = {require('../../icons/ic_ news_default.png')}
            selectedIcon = {require('../../icons/ic_news_selected.png')}
            selected = { this.state.selectedItem === 'news'}
            onPress = { ()=> {this.setState({ selectedItem : 'news'})}}
            >
              <MessageComponent></MessageComponent>


          </TabBarIOS.Item>
          <TabBarIOS.Item
            title = '我的'
            icon = {require('../../icons/nav_person.png')}
            selectedIcon = {require('../../icons/ic_wode_selected.png')}
            selected = { this.state.selectedItem === 'my'}
            onPress = { ()=> {this.setState({ selectedItem : 'my'})}}
            >
              <MyComponent></MyComponent>


          </TabBarIOS.Item>
        </TabBarIOS>
    )
  }
}
