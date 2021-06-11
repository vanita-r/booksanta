import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Touchable, Alert } from 'react-native';
import db from '../config';
import firebase from "firebase";
require("@firebase/firestore")

export default class SignUpLoginScreen extends React.Component{
    constructor(){
      super()
      this.state={
        username:"",
        password:"",
      }
    }

    /*userSignUp=(username,password)=>{
        firebase.auth().createUserWithEmailAndPassword(username,password)
        .then(()=>{Alert.alert("User successfully Signed Up")})
        //.catch((error)=>{Alert.alert("Sign Up Error"+error.Message)})
        .catch(function(error){
          var errorCode=error.code;
          var errorMessage=error.message;
          return Alert.alert("Sign up Error"+errorMessage)
        })
      }
    userLogin=(username,password)=>{
        firebase.auth().signInWithEmailAndPassword(username,password)
        .then(()=>{Alert.alert("User Login Successful")})
        //.catch((error)=>{Alert.alert("Login Error"+error.Message)})
        .catch((error)=>{
          var errorCode=error.code;
          var errorMessage=error.message;
          return Alert.alert("Login Error"+errorMessage)
        })
    }*/

    userLogin=(username,password)=>{ 
      firebase.auth().signInWithEmailAndPassword(username,password) 
      .then(()=>{ Alert.alert("User Login Successful") 
        this.props.navigation.navigate("HomeScreen") 
      }) 
      //.catch((error)=>{Alert.alert("Login Error"+error.Message)}) 
      .catch((error)=>{ 
        var errorCode=error.code; 
        var errorMessage=error.message; 
        return Alert.alert("Login Error"+errorMessage) 
      }) 
    }


    render(){
      return(
        <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.title}>Barter</Text>
        <View>
          <TextInput style={styles.loginBox}
            placeholder="Enter your Email"
            keyBoardType="email-address"
            onChangeText={(text)=>{
              this.setState({email:text})
            }}
          />
          <TextInput style={styles.loginBox}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text)=>{
              this.setState({password:text})
            }}
          />
  
          <TouchableOpacity style={styles.button}
            onPress={()=>{this.userSignUp(this.state.email, this.state.password)}}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={()=>{this.userLogin(this.state.email, this.state.password)}}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
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
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor: '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10,
    },
    title :{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color : '#ff3d00'
    },
  });
  