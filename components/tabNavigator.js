import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {createBottomTabNavigator} from "react-navigation-tabs";
import BookRequest from "../screens/BookRequest";
import BookDonate from "../screens/BookDonate";
import { AppsStackNavigator } from './appsStackNavigator';

export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonate, 
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
            tabBarLabel:"Donate Books"
        }
    },
    RequestBooks:{
        screen:BookRequest, 
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
            tabBarLabel:"Request Books"
        }
    }
    
})
