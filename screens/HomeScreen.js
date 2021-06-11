import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native';
import { ListItem } from "react-native-elements";

export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            keyExtractor:"",
            data:"",
            allRequests:[]
        }
    }
    renderItem=({item,i})=>{
        return(
            <ListItem key={i}>
                <ListItem.Content>
                <ListItem.Title>
                    {item.item_name}
                </ListItem.Title>
                <ListItem.Subtitle>
                    {item.description}
                </ListItem.Subtitle>
                <TouchableOpacity style={StyleSheet.button}>
                        <Text style={{color:'#ffff'}}>Exchange</Text>
                    </TouchableOpacity>
                </ListItem.Content>
            </ListItem>
        )
    }
    render(){
        this.navigation.state.params()
        return(
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.allRequests}
                    renderItem={this.renderItem}
                />
            
                {/*renderItem=({item,i})=>{
                        return(
                            <ListItem
                                key={i}
                                title={item.item_name}
                                subtitle={item.description}
                                titleStyle={{ color: 'black', fontWeight: 'bold' }}
                                rightElement={
                                    <TouchableOpacity style={StyleSheet.button}>
                                        <Text style={{color:'#ffff'}}>Exchange</Text>
                                    </TouchableOpacity>
                                }
                            />
                        )
                }*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F8BE85',
     alignItems: 'center',
     justifyContent: 'center'
   },
    button:{ 
        width:"75%", 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:10, 
        backgroundColor:"#ff5722", 
        shadowColor: "#000",
    },
})