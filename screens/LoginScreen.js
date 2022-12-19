import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  Image
} from "react-native";

import db from "../config";

const bgImage = require("../assets/background2.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class LoginSCreen extends React.Component{

  constructor(){
    super()
    this.state={
      email:"",
      password:""
    }
  }
  render (){
    const { email, password } = this.state;
    return(
     <KeyboardAvoidingView behavior="padding" style={styles.container}>
     <ImageBackground source={bgImage} style = {styles.bgImage}>
      <Image/>
       <Image/>
       <View>
       
       </View>
     </ImageBackground>
     </KeyboardAvoidingView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  
});