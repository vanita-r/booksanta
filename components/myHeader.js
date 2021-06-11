import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {Header, Icon, Badge} from 'react-native-elements';
import firebase from "firebase";
import db from "../config";

export default class MyHeader extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userID:firebase.auth().currentUser.email,
            value:""
        }
    }
    getNumberOfNotifications(){
        db.collection("all_notifications").where("notification_status","==","unread").where("targeted_user_id","==",this.state.userID)
        .onSnapshot(Snapshot=>{
            var unreadNotifications=Snapshot.docs.map(doc=>doc.data())
            this.setState({value:unreadNotifications.length})
        })
    }
    componentDidMount(){
        this.getNumberOfNotifications()
    }
    BellIconWithBadge=()=>{
        return(
            <View>
                <Icon name="bell" type="simple-line-icon" color="blue" size="25" 
                onPress={()=>{this.props.navigation.navigate("Notification")}}>
                    <Badge value={this.state.value} 
                    containerStyle={{position:'absolute', top:-4, right:-4}}>
                        
                    </Badge>
                </Icon>
            </View>
        )
    }
    render(){
    return(
    <Header
        leftComponent={<Icon name="bar" type="font-awesome" color="white" onPress={()=>{this.props.navigation.toggleDrawer()}}/>}
        centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
        backgroundColor='blue'
        rightComponent={<this.BellIconWithBadge {...this.props}/>}
    />
    )
}
}

