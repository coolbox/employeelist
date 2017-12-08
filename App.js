/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';
import EmployeeMaster from './app/EmployeeMaster'

let {width, height} = Dimensions.get("window");

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Beach_Boracay_2003.jpg'}}
            style={{width: width, height: 150}}
          />
          <Text style={styles.headline}>Employee List</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>Full Name</Text>
          <Text style={styles.rowText}>Email</Text>
        </View>
        <EmployeeMaster />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#15baf0',
    alignItems: 'center'
  },
  rowText: {
    flex: 1,
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#15baf0'
  },
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#add8e6',
    flexDirection: 'column'
  },
  backdrop: {
    paddingTop: 40,
    width: width,
    height: 120
  },
  headline: {
    top: 30,
    position: 'absolute',
    left: width/4,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }
});
