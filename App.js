/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import Judul from './Component/Judul';
const instructions = Platform.select({

});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Judul title= "LOGIN"/>
      <Judul title= "BIODATA"/>

      <Image
      source={require('./ara.jpg')}
      />
        <Text style={styles.welcome}>Hallooooo!</Text>
        <Text style={styles.instructions}>Nama : Nanda Widya Maharani</Text>
        <Text style={styles.instructions}>Kelas : XI RPL 3</Text>
        <Text style={styles.instructions}>Absen : 31</Text>
        <Text style={styles.instructions}>TTL : Purwokerto, 16 September 2002</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2ded8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
