import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable, Alert, Modal, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native';
import db from '../config';
import firebase from "firebase";
require("@firebase/firestore")

export default class ExchangeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            addItem:[],
            exchangeId:''
        }
    }

    addItem(){
        var userName=this.state.userName
        db.collection("exchange_requests").add({
            "usernmae":userName,
            "item_name":itemName,
            "description":description,
        })
        this.setState({
            itemName:'',
            description:''
        })
        {this.createUniqueId()}
        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text:'OK',onPress:()=>{
                    this.props.navigation.navigate('HomeScreen')
                }}
            ]
        );
    }
    createUniqueId(){
        this.state.exchangeId
    }
    render(){
        return(
            <View style={{flex:1}}>
                <TextInput style={styles.formTextInput} placeholder={"Item Name"}/>
                <TextInput style={styles.descriptionInput} placeholder={"Item Descriptions"}></TextInput>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{this.addItem(this.state.itemName,this.state.description)}}
                >
                <Text style={{color:'#ffff', fontSize:18,fontWeight:'bold'}}>Add Item</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
      width:300,
      height:45,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      marginBottom:3,
      marginLeft:3
    },
    formTextInput:{ 
      width:"75%", 
      height:35, 
      alignSelf:'center', 
      borderColor:'#ffab91', 
      borderRadius:10, 
      borderWidth:1, 
      marginTop:20, 
      padding:10, 
    },
    descriptionInput:{ 
        width:"75%", 
        height:55, 
        alignSelf:'center', 
        borderColor:'#ffab91', 
        borderRadius:10, 
        borderWidth:1, 
        marginTop:20, 
        padding:10, 
      },
  });