import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';

export default class menuTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        {
          text: '限时抢购',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
          href: '',
          smallTitle:'',
          price:'23.9',
          time:'12345678'
        }, {
          text: '积分竞猜',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
          href: '',
          smallTitle:'博你所爱球队',
          price:'',
          time:''
        }, {
          text: '充值返券',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
          href: '',
          smallTitle:'储值送Iphone',
          price:'',
          time:''
        }, {
          text: '推荐有礼',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505653747719&di=3a5ca192fa4eba29638bc8f05e96260b&imgtype=0&src=http%3A%2F%2Fpic.dbw.cn%2F0%2F08%2F85%2F91%2F8859118_879718.jpg',
          href: '',
          smallTitle:'景区海岛任你游',
          price:'',
          time:''
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
      <View style={styles.childrenView}>
        <TouchableOpacity style={styles.childrenItem} activeOpacity={0.75} onPress={this.onPress}>
          <View style = {styles.childrenTitleWrap}>
            <Text style={styles.childrenTitle}>{feed.text}</Text>
            <Text style={styles.childrenSmallTitle}>{feed.smallTitle}</Text>
          </View>
          <Image style={styles.childrenImg} source={{
            uri: feed.img
          }}/>

        </TouchableOpacity>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    height: 200,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginTop:10,
  },
  childrenView: {
    width: (Dimensions.get('window').width / 2),
    height: 100,
    position: 'relative',
    borderWidth: 1,
    borderColor: 'rgba(238,238,238,1)',
    borderTopWidth:0,
    borderLeftWidth:0
  },
  childrenItem: {
    width: (Dimensions.get('window').width / 2),
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  childrenImg: {
    width: 70,
    height: 70,
    marginRight:10,
  },
  childrenTitleWrap: {
    display: 'flex',
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'center',


  },
  childrenTitle: {
    color: '#333',
    fontSize: 17,
    marginLeft:10,
    marginBottom:15
  },
  childrenSmallTitle:{
    fontSize:12,
    color:'#999999',
    marginLeft:10
  }
})
