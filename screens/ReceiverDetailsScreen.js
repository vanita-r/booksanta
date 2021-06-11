import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';
import firebase from 'firebase';

import db from '../config.js';

export default class RecieverDetailsScreen extends Component{
   constructor(){
    super()
    this.state={
        userId          : firebase.auth().currentUser.email,
        userName        : "",
        recieverId      : this.props.navigation.getParam('details')["user_id"],
        exchangeId       : this.props.navigation.getParam('details')["exchange_id"],
        itemName        : this.props.navigation.getParam('details')["item_name"],
        reason_for_requesting     : this.props.navigation.getParam('details')["reason_to_request"],
        recieverName    : '',
        recieverContact : '',
        recieverAddress : '',
        recieverRequestDocId : ''
        }
    }

    addNotification=()=>{
        console.log("in the function", this.state.rec)
        var message = this.state.userName + " has shown interest"
        db.collection("all_notifications").add({
          "targeted_user_id"    : this.state.recieverId,
          "donor_id"            : this.state.userId,
          "exchange_id"          : this.state.exchangeId,
          "item_name"           : this.state.itemName,
          "date"                : firebase.firestore.FieldValue.serverTimestamp(),
          "notification_status" : "unread",
          "message"             : message
        })
      }
}