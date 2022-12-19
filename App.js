import React, { Component } from "react";
import LoginScreen from './screens/Login'
import BottomTabNavigator from "./components/BottomTabNavigator";
import {createSwitchNavigator,createAppContainer} from  'react-navigation'

export default class App extends Component {
  constructor() {
    super();
   
  }


const AppSwitchNavigator = createSwitchNavigator(
  {
    Login:{
      screen:LoginScreen
    },
    BottomTab:{
      screen:BottomTabNavigator
    }
  },
  {
    initialRouteName :"BottomTab"
  }
  
)

const AppContainer = createAppContainer(AppSwitchNavigator)
