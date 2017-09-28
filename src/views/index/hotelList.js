import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

export default class hotelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {
        "id": "Brand1",
        "name": "BrandChannel",
        "style": "0",
        "info": {
          "title": "",
          "titleImg": "http://images.plateno.com/images/c/16H1a8Y2NK",
          "column": [
            {
              "columnId": "1",
              "title": "豪华高端",
              "smallTitle": "低调奢华享尊贵",
              "titleImg": "http://images.plateno.com/images/c/16H1bvvQZW",
              "brandInfo": [
                {
                  "id": "467",
                  "resourceId": "41",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16Hhgq86Ea",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=201609244&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D530005"
                }, {
                  "id": "468",
                  "resourceId": "42",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16H1DU0tIP",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=2016101401&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D530004"
                }, {
                  "id": "469",
                  "resourceId": "43",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16H1HrvCDi",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=2016122701&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D93"
                }, {
                  "id": "470",
                  "resourceId": "44",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16H1IhcHvU",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=201609242&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D530007"
                }, {
                  "id": "471",
                  "resourceId": "45",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16HhNVWPRg",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=2016101402&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D530002"
                }, {
                  "id": "545",
                  "resourceId": "47",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16M7bOHC78",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=20170802&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fext%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3DJINJIANG"
                }, {
                  "id": "546",
                  "resourceId": "48",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16M7dZFf2v",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=20170802&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fext%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3DJINJIANG-HIGH"
                }, {
                  "id": "547",
                  "resourceId": "49",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16M7faDaUx",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=20170802&page=http%3A%2F%2Ftrip.plateno.com%2Fwehotelapp%2Fsearch%2Findex.html%23%2Fcity%3Ffrom%3Dbrand%26brand%3DMETROPOLO"
                }
              ]
            }, {
              "columnId": "2",
              "title": "精品优选",
              "smallTitle": "典雅别致超有品",
              "titleImg": "http://images.plateno.com/images/c/16H1eRjBVj",
              "brandInfo": [
                {
                  "id": "472",
                  "resourceId": "61",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16H1MgNYUz",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=201609251&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D96%2C106"
                }, {
                  "id": "485",
                  "resourceId": "62",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16Hh6wlCo8",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=201609252&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D91"
                }, {
                  "id": "486",
                  "resourceId": "63",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16Hh83kWgz",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=201609253&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D90"
                }, {
                  "id": "487",
                  "resourceId": "64",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16Hh9jtoFs",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=2016122702&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D92"
                }, {
                  "id": "488",
                  "resourceId": "65",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16Q4V1UClK",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=201609250&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D102"
                }, {
                  "id": "489",
                  "resourceId": "66",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16Hhc7OXb1",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=201609254&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D98"
                }, {
                  "id": "501",
                  "resourceId": "67",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16HhEQxOEd",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=20170713094&page=http%3A%2F%2Ftrip.plateno.com%2Fwehotelapp%2Fsearch%2Findex.html%23%2Fcity%3Ffrom%3Dbrand%26brand%3DMAGNOTEL"
                }, {
                  "id": "502",
                  "resourceId": "68",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16HhFSIUBq",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=2017032201&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fext%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D137"
                }
              ]
            }, {
              "columnId": "3",
              "title": "简约舒适",
              "smallTitle": "经济实惠更便捷",
              "titleImg": "http://images.plateno.com/images/c/16H1fy6nPo",
              "brandInfo": [
                {
                  "id": "490",
                  "resourceId": "81",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16HhhfLKcX",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=201609246&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D2"
                }, {
                  "id": "493",
                  "resourceId": "82",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16MEY9ZPeX",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=2016112401&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fext%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D6"
                }, {
                  "id": "492",
                  "resourceId": "83",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16Hhi7RbQ8",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=2016112401&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fext%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D1%26v%3D1492741589779"
                }, {
                  "id": "494",
                  "resourceId": "84",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16Hhn1kOwm",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=201609248&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D4"
                }, {
                  "id": "495",
                  "resourceId": "85",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16Hhp3QKFb",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=201609247&page=http%3A%2F%2Fm.7daysinn.cn%2Fmaserati%2Fext%2Fstatic%2Fbrands%2Fbrands.html%3FbrandId%3D5%26v%3D1492741589779"
                }, {
                  "id": "496",
                  "resourceId": "86",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16HhtoGPA9",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=201707098&page=http%3A%2F%2Ftrip.plateno.com%2Fwehotelapp%2Fsearch%2Findex.html%23%2Fcity%3Ffrom%3Dbrand%26brand%3DJJPINSHANG"
                }, {
                  "id": "497",
                  "resourceId": "87",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16Hhw5FcCk",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=20170713097&page=http%3A%2F%2Ftrip.plateno.com%2Fwehotelapp%2Fsearch%2Findex.html%23%2Fcity%3Ffrom%3Dbrand%26brand%3DJJINN"
                }, {
                  "id": "498",
                  "resourceId": "88",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16HhAtx8fY",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=20170996&page=http%3A%2F%2Ftrip.plateno.com%2Fwehotelapp%2Fsearch%2Findex.html%23%2Fcity%3Ffrom%3Dbrand%26brand%3DJJFENGSHANG"
                }, {
                  "id": "499",
                  "resourceId": "89",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16HhC7qE07",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=201707096&page=http%3A%2F%2Ftrip.plateno.com%2Fwehotelapp%2Fsearch%2Findex.html%23%2Fcity%3Ffrom%3Dbrand%26brand%3DGOLDMETINN"
                }, {
                  "id": "500",
                  "resourceId": "90",
                  "channelName": "BrandChannel",
                  "img": "http://images.plateno.com/images/c/16HhD9J7Or",
                  "jumpType": "V2",
                  "jumpTarget": "http://trip.plateno.com/actRedirect?actId=20170713095&page=http%3A%2F%2Ftrip.plateno.com%2Fwehotelapp%2Fsearch%2Findex.html%23%2Fcity%3Ffrom%3Dbrand%26brand%3DBESTAY"
                }
              ]
            }
          ]
        }
      }
    }
  }

  renderChildrenList = (feed, key) => {
    return (
      <View key={key}>
        <View style={styles.bannerWrap}><Image source={{
        uri: feed.titleImg
      }} style={styles.bannerImage}/>
          <Text style={styles.bannerTitle1}>- {feed.title}
            -</Text>
          <Text style={styles.bannerTitle2}>{feed.smallTitle}</Text>
        </View>
        <View style={styles.listBrandWrap}>
          {feed.brandInfo.map(this.ChildrenList)}
        </View>

      </View>
    )
  }

  ChildrenList = (feed, key) => {
    return (
      <ChildrenItem key={key} feed={feed} onPress={this.onPressCell} index={key}></ChildrenItem>
    )
  }

  render() {
    return (
      <View style={styles.listWrap}>
        <Image source={{
          uri: this.state.list.info.titleImg
        }} style={styles.titleImage}/>
        {this.state.list.info.column.map(this.renderChildrenList)}
      </View>
    )
  }
}

class ChildrenItem extends Component {
  onPress = () => {
    const {onPress, feed} = this.props
    onPress && onPress(feed)
  }
  render() {
    const {feed, onPress, index} = this.props;
    return (

      <TouchableOpacity style={styles.liBrand} activeOpacity={0.75} onPress={this.onPress}>
        <Image style={styles.liBrandImg} source={{
          uri: feed.img
        }}/>
      </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({
  listWrap: {
    width: Dimensions.get('window').width,
    display: 'flex',
    flexDirection: 'column'
  },
  titleImage: {
    width: '100%',
    height: 58
  },
  bannerWrap: {
    width: Dimensions.get('window').width,
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bannerTitle1: {
    color: '#333',
    fontSize: 15,
    marginBottom: 10
  },
  bannerTitle2: {
    color: '#AF7D21',
    fontSize: 12
  },
  bannerImage: {
    width: '100%',
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0
  },
  listBrandWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
  liBrand: {
    width: (Dimensions.get('window').width / 4),
    height: 94,
    position: 'relative',
    borderWidth: 1,
    borderColor: 'rgba(238,238,238,1)',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  liBrandImg:{
    width: (Dimensions.get('window').width / 4)-20,
    height:51,
    resizeMode:'cover'
  }
})
