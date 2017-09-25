import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';

export default class menuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        {
          text: '酒店预订',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
          href: '',
          type: 3
        }, {
          text: '地图搜房',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
          href: '',
          type: 3
        }, {
          text: '长租房',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
          href: '',
          type: 3
        }, {
          text: '商城',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
          href: '',
          type: 4
        }, {
          text: '出行保险',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
          href: '',
          type: 4
        }, {
          text: '青年公寓',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
          href: '',
          type: 4
        }, {
          text: '积分天地',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
          href: '',
          type: 4
        }, {
          text: '景区门票',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
          href: '',
          type: 4
        }, {
          text: '周边游',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
          href: '',
          type: 4
        }, {
          text: '国内游',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
          href: '',
          type: 4
        }, {
          text: '出境游',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
          href: '',
          type: 4
        }
      ]
    };
  }

  renderChindrenList = (feed, key) => {
    return (<ChildrenItem key={key} feed={feed} onPress={this.onPressCell} index={key}/>)
  }

  render() {
    return (
      <View style={styles.menuContainer}>
        {this.state.menuList.map(this.renderChindrenList)}
      </View>
    )
  }

  componentDidMount() {}
  componentWillUnmount() {}
}

class ChildrenItem extends Component {
  onPress = () => {
    const {onPress, feed} = this.props
    onPress && onPress(feed)
  }
  render() {
    const {feed, onPress, index} = this.props;
    return (
      <View style={index < 3
        ? styles.childrenView3
        : styles.childrenView4}>
        <TouchableOpacity style={index < 3
          ? styles.childrenItem3
          : styles.childrenItem4} activeOpacity={0.75} onPress={this.onPress}>

          <Image style={index < 3
            ? styles.childrenImg3
            : styles.childrenImg4} source={{
            uri: feed.img
          }}/>
          <View style = {styles.childrenTitleWrap}>
            <Text style={index < 3
              ? styles.childrenTitle3
              : styles.childrenTitle4}>{feed.text}</Text>
          </View>
        </TouchableOpacity>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    height: 280,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%'
  },
  childrenView3: {
    width: (Dimensions.get('window').width / 3),
    height: 100,
    position: 'relative',
    borderWidth: 1,
    borderColor: 'rgba(238,238,238,1)',
    borderTopWidth:0,
    borderLeftWidth:0
  },
  childrenView4: {
    width: (Dimensions.get('window').width / 4),
    height: 100,
    position: 'relative'
  },
  childrenItem3: {
    width: (Dimensions.get('window').width / 3),
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  childrenItem4: {
    width: (Dimensions.get('window').width / 4),
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  childrenImg3: {
    width: 48,
    height: 48
  },
  childrenImg4: {
    width: 30,
    height: 30
  },
  childrenTitleWrap: {
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  childrenTitle3: {
    color: '#333',
    fontSize: 14,
    marginTop:10,
  },
  childrenTitle4: {
    color: '#333',
    fontSize: 12,
    marginTop:10,
  }
})
