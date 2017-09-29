import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Button,
    Text,
    View,
    Image,
    StatusBar
} from 'react-native';
import { StackNavigator, TabBarBottom, TabNavigator } from "react-navigation";


class Home extends React.Component {
    static navigationOptions = {
      title: 'homeThree',
    header: (navigation, defaultHeader) => ({
      ...defaultHeader,  // 默认预设
      visible: true,  // 覆盖预设中的此项
      tintColor:'red',
    }),
        tabBarLabel: '热点',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('../../icons/ic_ home_default.png') : require('../../icons/ic_ home_default.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
        )
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>！这是热点</Text>
            </View>
        );
    }
}

class Circle extends React.Component {
    static navigationOptions = {
        tabBarLabel: '圈子',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('../../icons/ic_ wallt_default.png') : require('../../icons/ic_ wallt_default.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
        )
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>！这是圈子</Text>
            </View>
        );
    }
}

class Tools extends React.Component {
    static navigationOptions = {
        tabBarLabel: '工具',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('../../icons/ic_ news_default.png') : require('../../icons/ic_ news_default.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
        )
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>！这是工具</Text>
            </View>
        );
    }
}

class Mypage extends React.Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ? require('../../icons/nav_person.png') : require('../../icons/nav_person.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
            />
        )
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>！这是我的</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});


const MyApp = TabNavigator(
    {
        Home: {
            screen: Home,
        },
        Circle: {
            screen: Circle,
        },
        Tools: {
            screen: Tools,
        },
        Mypage: {
            screen: Mypage,
        },
    },
    {
        tabBarOptions: {
            activeTintColor: '#4BC1D2',
            inactiveTintColor: '#000',
            showIcon: true,
            showLabel: true,
            upperCaseLabel: false,
            pressColor: '#823453',
            pressOpacity: 0.8,
            style: {
                backgroundColor: '#fff',
                paddingBottom: 0,
                borderTopWidth: 0.5,
                borderTopColor: '#ccc',
            },
            labelStyle: {
                fontSize: 12,
                margin: 1
            },
            indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        backBehavior: 'none',
    });

module.exports = MyApp;
