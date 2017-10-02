import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

export default class my extends Component {
  render() {
    return (
      <View style = {styles.myTopWrap}>
        <View style = {styles.myTopTools}>
          <TouchableOpacity onPress = {this.onPress} style = {styles.myTopToolsBut}>
            <Image style = {styles.myTopToolsIcon} source = {require('../../icons/ic_sign_default.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress = {this.onPress} style = {styles.myTopToolsBut}>
            <Image style = {styles.myTopToolsIcon} source = {require('../../icons/ic_setting.png')} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style = {styles.userLevelCard} onPress = {this.onPress}>
            <Image style = {styles.userLevelCardImage}
              source = {require('../../icons/bg_vipthree.png')} />
              <Image style = {styles.userAvatar}
                source = {require('../../resource/avatar.jpg')}  />
                <View style = {styles.userDetails}>
                  <View style = {styles.userName}>
                    <Text style = {styles.showName}>小北</Text>
                    <Image style = {styles.editName}
                      source = {require('../../icons/ic_pen.png')}
                    />
                  </View>
                  <Text style = {styles.userLevelText}>V3金卡用户</Text>
                </View>


        </TouchableOpacity>
        <TouchableOpacity style = {styles.userRights} onPress = {this.onPress}>
          <View style = {styles.userRightsLi}>
              <Image style = {styles.userRightLiIcon} source = {require('../../icons/ic_tqfjzg.png')}/>
              <Text style = {styles.userRightLiText}>房价88折</Text>
          </View>
          <View style = {styles.userRightsLi}>
              <Image style = {styles.userRightLiIcon} source = {require('../../icons/ic_tqyctf.png')}/>
              <Text style = {styles.userRightLiText}>延迟退房</Text>
          </View>
          <View style = {styles.userRightsLi}>
              <Image style = {styles.userRightLiIcon} source = {require('../../icons/ic_tqmfzc.png')}/>
              <Text style = {styles.userRightLiText}>免费早餐</Text>
          </View>
          <Text style = {styles.userListTips}>再住2晚可升级</Text>

            <Image style = {styles.userRightIcon} source = {require('../../icons/ic_arrow.png')} />

        </TouchableOpacity>
      </View>
    )

  }

  onPress = () => {

  }
}

const styles = StyleSheet.create({
  myTopWrap : {
    height : 138,
    width : '100%',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems: 'center',
  },
  myTopTools : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-end',
    height : 34,
    //marginTop : 40,
    //alignItems : 'center',
    width : '100%',
    //flex : 1,
    position : 'absolute',
    top : 0,
    left : 0,
    },
  myTopToolsBut : {
    width : 34,
    height : 34,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
  },
  myTopToolsIcon : {
    width : 17,
    height : 17
  },
  userLevelCard : {
    marginTop : 84,
    width : '100%',
    height : 85,
    display : 'flex',
    flexDirection : 'row',
    alignItems : 'center',
  },
  userLevelCardImage : {
    position : 'absolute',
    top : 0,
    left : 0 ,
    height : '100%',
    width : '100%',
  },
  userAvatar : {
    width : 55,
    height : 55,
    borderRadius : 27,
    borderWidth : 2,
    borderColor : '#fff',
    marginLeft : (Dimensions.get('window').width - 345)/2+15,
    marginTop : 15,
    marginRight : 9,
  },
  userDetails : {
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'flex-start',
  },
  userName : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-start',
    alignItems : 'center',
    marginBottom : 10,
    marginTop : 10
  },
  showName : {
    color : '#fff',
    fontSize : 18,
    marginRight : 10

  },
  editName : {
    width : 11.8,
    height : 11.75,
  },
  userLevelText : {
    color : 'rgba(255,255,255,0.8)',
    fontSize : 12,
  },
  userRights : {
    width : '100%',
    height : 80,
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-start',
    alignItems : 'center',
    paddingLeft : (Dimensions.get('window').width - 345)/2,
    backgroundColor : '#fff',
  },
  userRightsLi : {
    width : 50,
    height : 80,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    marginRight : 25.25,
  },
  userRightLiIcon : {
    width : 26.6,
    height : 29.95,
    marginBottom : 10,
  },
  userRightLiText : {
    color : '#666',
    fontSize : 11,
  },
  userListTips : {
    color : '#ccc',
    fontSize : 12,
    position : 'absolute',
    right : 35.5,
  },
  userRightIcon : {
    width : 6.1,
    height : 11.7,
    position : 'absolute',
    right : 14.6,
  }


})
