/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import Avatar from './src/Components/Avatar';
import Styles from './src/common';

type Props ={};
// const rectangle = {
//   width: 100, 
//   height: 100,
//   backgroundColor: 'black'
// };
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }

  render() {
    const { isActive } = this.state;
    return (
      <View>
          <View style={{
            width: 200, 
            height: 100, 
            backgroundColor: 'red'
          }}  />    
          <View style ={Styles.rectangle} />
          
          <View style={[styles.header, 
                        //styles.backgroundRed, 
                        { borderColor: "yellow" },
                        isActive ? styles.backgroundRed : styles.backgroundGreen
                      ]}  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: 200,
    height: 100,
    borderWidth: 5, 
    //borderColor: 'gray',
    marginTop: 10
  },
  backgroundRed: { 
    backgroundColor: 'red',
  },
  backgroundGreen: { 
    backgroundColor: 'green',
  }
});