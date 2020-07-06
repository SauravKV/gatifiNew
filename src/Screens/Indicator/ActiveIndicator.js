import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View ,Dimensions} from "react-native";
const {width, height} = Dimensions.get('window');

export  class Indicator extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#f15a22" />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: "center",
    position:'absolute',
    marginTop:height/2,
    margin:width/2
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10
  }
});

export default Indicator