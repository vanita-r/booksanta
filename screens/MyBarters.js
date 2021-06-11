import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native';
import { ListItem } from "react-native-elements";
import firebase from 'firebase';

export default class MyBartersScreen extends React.Component{
    constructor(){
        super()
        this.state={
            data:"",
            donorId : firebase.auth().currentUser.email,
            donorName : "",
        }
    }
    getAllBarters(){
        db.collection("users").doc(this.state.DocID)
        return(
            <FlatList 
                data={this.state.addBarters}
            />
        )
    }
    sendNotification=(itemDetails,requestStatus)=>{
        var exchangeId = itemDetails.exchange_id
        var donorId = itemDetails.donor_id
        db.collection("all_notifications")
        .where("exchange_id","==", exchangeId)
        .where("donor_id","==",donorId)
        .get()
        .then((snapshot)=>{
          snapshot.forEach((doc) => {
            var message = ""
            if(requestStatus === "Item Sent"){
              message = "user has sent the item"
            }else{
               message = " user has shown interest "
            }
            db.collection("all_notifications").doc(doc.id).update({
              "message": message,
              "notification_status" : "unread",
              "date"                : firebase.firestore.FieldValue.serverTimestamp()
            })
          });
        })
      }
}