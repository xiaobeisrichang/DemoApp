import React, {Component} from 'react';
import {StyleSheet, Text, View, AppState} from 'react-native'

import Geolocation from 'Geolocation'
import moment from 'moment'

export default class timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeStr: '',
      startTime: this.props.startTime
        ? this.props.startTime
        : moment().toDate().getTime(), //如果为空，选择当前时间，为精确到毫秒的时间戳
      endTime: 1506667519982, //this.props.endTime?this.props.endTime:1506667519982,            //为精确到毫秒的时间戳 1506667519982
      formData: this.props.formData
        ? this.props.formData
        : 'H|M|S',
      dataShowType: this.props.dataShowType
        ? this.props.formData
        : '0' //dataShowType 0:英文  1：中文
    }
    this._time = null;
    this._index = 0;
  }
  componentWillMount() {
    this.countTime();
    //监听状态改变事件
    AppState.addEventListener('change', this.handleAppStateChange.bind(this));
    //监听内存报警事件
    AppState.addEventListener('memoryWarning', function() {
      console.log("内存报警....");
    });
  }

  componentWillUnmount() {
    //删除状态改变事件监听
    AppState.removeEventListener('change', this.handleAppStateChange.bind(this));
  }
  render() {
    return (
      <View>
        <Text style={styles.item} onPress={this.count.bind(this, this.state.startTime, this.state.endTime)}>{this.state.timeStr}</Text>
      </View>
    )
  }

  //状态改变响应
  handleAppStateChange() {
    switch (AppState.currentState) {
      case 'active': //前台运行中
        this.setState({startTime: moment().toDate().getTime()});
        this.countTime();
        break;
      case 'background': //后台运行中
        this._time && clearInterval(this._time);
        break;
      case 'Inactive': //运行过度状态
        this.setState({startTime: moment().toDate().getTime()});
        this.countTime();
        break;
    }
  }

  countTime() {
    this._time = setInterval(() => {
      this.setState({
        startTime: this.state.startTime + 1000
      })
      if (this.state.startTime <= 0) {
        this._time && clearInterval(this._time);
      } else {
        this.count(this.state.startTime, this.state.endTime);
      }
    }, 1000)
  }

  count(start, end) {
    let timeLine = (end - start) / 1000;
    let day = Math.floor(timeLine / (24 * 60 * 60));
    let hour = Math.floor((timeLine - (day * 24 * 60 * 60)) / (60 * 60)) > 9
      ? Math.floor((timeLine - (day * 24 * 60 * 60)) / (60 * 60))
      : "0" + Math.floor((timeLine - (day * 24 * 60 * 60)) / (60 * 60));
    let min = Math.floor((timeLine - day * 24 * 60 * 60 - hour * 60 * 60) / (60)) > 9
      ? Math.floor((timeLine - day * 24 * 60 * 60 - hour * 60 * 60) / (60))
      : '0' + Math.floor((timeLine - day * 24 * 60 * 60 - hour * 60 * 60) / (60));
    let sec = Math.floor(timeLine - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60) > 9
      ? Math.floor(timeLine - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60)
      : '0' + Math.floor(timeLine - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60);

    if (day > 0) {
      this.setState({
        "timeStr": day + "天 " + hour + ":" + min + ":" + sec
      });
    } else {
      this.setState({
        "timeStr": hour + ":" + min + ":" + sec
      });
    }

  }
}

//获取位置

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
  item: {
    margin: 15,
    height: 30,
    borderWidth: 1,
    padding: 6,
    borderColor: '#ddd',
    textAlign: 'center'
  }
});
