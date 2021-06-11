import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
//import {tabNavigator} from "react-navigation-tabs";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
//import {AppContainer} from "react-navigation";
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from "./screens/SignUpLoginScreen";
import ExchangeScreen from "./screens/ExchangeScreen";
import HomeScreen from "./screens/HomeScreen";
import AppDrawerNavigator from './component/AppDrawerNavigator';
import {createDrawerNavigator} from "react-navigation-drawer";
import {customSideBarMenu} from "./component/customSideBarMenu";
import SettingsScreens from "./screens/SettingsScreen";


export default function App() {
  return (
    <AppContainer/>
  );
}

const tabNavigator = createBottomTabNavigator({
  HomeScreen:{screen:HomeScreen},
  ExchangeScreen:{screen:ExchangeScreen},
  Drawer:{screen:AppDrawerNavigator}
})

const SwitchNavigator= createSwitchNavigator({ 
  SignUpLoginScreen:{screen:SignUpLoginScreen}, 
  TabNavigator:{screen:tabNavigator}, 
  //Drawer:{screen:AppDrawerNavigator}
}) 
const AppContainer = createAppContainer(SwitchNavigator);

/*const AppDrawerNavigator=createDrawerNavigator({
  Home:{
    screen:tabNavigator
    },
  Settings:{
    screen:SettingsScreens
    }
  },
  {
    contentComponent:customSideBarMenu
  },
  {
    initialRouteName:'HomeScreen'
})*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
