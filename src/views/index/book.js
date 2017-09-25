import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

export default class book extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.bookContainer}>
        <Text style={styles.hotelName}>麗枫广州东晓南地铁站店</Text>
      </View>
    )
  }

  componentDidMount() {}

  componentWillUnmount() {}
}

const styles = StyleSheet.create({
  bookContainer: {
    height: 50,
    width: Dimensions.get('window').width - 2 *10,
    marginLeft: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hotelName: {
    color: '#333',
    fontSize: 15
  }
})
