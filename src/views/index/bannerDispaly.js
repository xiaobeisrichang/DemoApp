import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';

export default class bannerDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: {
        "title": "",
        "titleImg": "http://images.plateno.com/images/c/16H19cQgSt",
        "info": [{
          "id": "673",
          "resourceId": "31",
          "channelName": "InteractiveChannel",
          "img": "http://images.plateno.com/images/c/16Wbc8PZkD",
          "title": "",
          "smallTitle": "",
          "limitedTime": 0.0,
          "label": "",
          "jumpType": "V0",
          "jumpTarget": "botaoota://socialList?",
          "priceTag": null
        }, {
          "id": "642",
          "resourceId": "32",
          "channelName": "InteractiveChannel",
          "img": "http://images.plateno.com/images/c/16Tg2gUnWg",
          "title": "",
          "smallTitle": "",
          "limitedTime": 0.0,
          "label": "",
          "jumpType": "V2",
          "jumpTarget": "http://trip.plateno.com/actRedirect?actId=20170901&page=http%3A%2F%2Fm.7daysinn.cn%2Fmarketing-activities%2Factivities%2Fbeautifulassistant26.html",
          "priceTag": null
        }, {
          "id": "720",
          "resourceId": "33",
          "channelName": "InteractiveChannel",
          "img": "http://images.plateno.com/images/c/16YDJtnZkk",
          "title": "",
          "smallTitle": "",
          "limitedTime": 0.0,
          "label": "",
          "jumpType": "V0",
          "jumpTarget": "botaoota://socialDetail?detailID=135636",
          "priceTag": null
        }]
      }
    };
  }

  render() {
    return (
      <View style={styles.bannerContainer}>
          <Image
            style = { styles.banner}
            source = {{uri:this.state.banner.titleImg}}
          />
          <View style = { styles.bannerWrap } >
            {this.state.banner.info.map(this.ChildrenBanner)}
          </View>
      </View>
    )
  }

  ChildrenBanner = (feed, key) => {
    return (
      <TouchableOpacity key = {key} style={ key ? styles.bannerList : styles.bannerListFirst}
        activeOpacity={0.75}
        onPress={this.onPress}>
        <Image style={styles.bannerImageList} source={{
          uri: feed.img
        }}/>
      </TouchableOpacity>
    )
  }

  onPress = ()=>{

  }

  componentDidMount() {}

  componentWillUnmount() {}
}

const styles = StyleSheet.create({
  bannerContainer: {
    height: 286,
    width: '100%',
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  banner:{
    width:'100%',
    height:58,
  },
  bannerWrap : {
    width : '100%',
    height : 228,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent : 'space-between'
  },
  bannerList : {
    position:'relative',
    width:(Dimensions.get('window').width - 3)/2,
    height : 110,
    marginTop : 3,
  },
  bannerListFirst:{
    width:Dimensions.get('window').width,
    height:110,
    marginTop : 0,
  },
  bannerImageList : {
    width : '100%',
    height : 110,

  }

})
