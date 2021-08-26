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
         /* { <View style={{
            width: 200, 
            height: 100, 
            backgroundColor: 'red'
          }}  />    
          <View style ={Styles.rectangle} />
          
          <View style={[styles.header, 
                        //styles.backgroundRed, 
                        { borderColor: "yellow" },
                        isActive ? styles.backgroundRed : styles.backgroundGreen
                      ]}  /> }*/
      <View  style ={styles.container}>
        <View style={styles.top}>
          <View style ={styles.topLeft}>
            <View style ={styles.topLeftTop}/>
            <View style ={styles.topLeftBottom}/>
          </View>
          <View style ={styles.topRight}/>
        </View> 
        <View style ={styles.bottom}>
          <View style ={styles.bottomLeft}/>
          <View style = {styles.bottomBetween}/>
          <View style = {styles.bottomRight}>
            <View style = {styles.bottomRightTop}/>
            <View style = {styles.bottomRightBottom}/>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    //justifyContent: "",
    alignItems:"stretch",
    height: "100%",
  },
  top: {
    flexDirection: "row",
    flex: 7,
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 5,
  },
  bottom: {
    flexDirection: "row",
    flex: 3,
    backgroundColor: "yellow",
    borderColor: "black",
    borderWidth: 5,
  },
  topLeft: { 
    flex: 2,
    backgroundColor:"white",
    borderColor: "black",
    borderWidth: 5,
  },
  topRight: {
    flex: 5,
    borderColor: "black",
    borderWidth: 5,
  },
  topLeftTop: { 
    flex: 2,
    borderColor: "black",
    borderBottomWidth: 5
    
  },
  topLeftBottom: { 
    flex: 5,
    borderColor: "black",
  },
  bottomLeft:{
    flex: 2,
    backgroundColor:"blue",
    borderColor: "black",
    borderWidth: 5,
  },
  bottomBetween:{
    flex: 4,
    backgroundColor:"white",
    borderColor: "black",
    borderWidth: 5,
  },
  bottomRight:{
    flex: 1,
    borderColor: "black",
    borderWidth: 5,
  },
  bottomRightTop:{
    flex: 1,
    backgroundColor:"white",
    borderColor: "black",
    
  },
  bottomRightBottom:{
    flex: 2,
   // backgroundColor:"white",
    borderColor: "black",
    borderTopWidth:  5
  },
})
// const styles = StyleSheet.create({
//   header: {
//     width: 200,
//     height: 100,
//     borderWidth: 5, 
//     //borderColor: 'gray',
//     marginTop: 10
//   },
//   backgroundRed: { 
//     backgroundColor: 'red',
//   },
//   backgroundGreen: { 
//     backgroundColor: 'green',
//   }
// });