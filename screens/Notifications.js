import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native';
import { ListItem } from "react-native-elements";
import{Card,Header,Icon} from 'react-native-elements';

export default class NotificationScreen extends React.Component{
    constructor(){
        super()
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
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:0.1}}>
                    <MyHeader title={"Notifications"} navigation={this.props.navigation}/>
                </View>
                <View style={{flex:0.9}}>
                    {
                        this.state.allNotifications.length === 0
                        ?(
                            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:25}}>You have no notifications</Text>
                            </View>
                        )
                        :(
                            <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.allNotifications}
                            renderItem={this.renderItem}
                            />
                        )
                    }
                    <View>
                        <Icon name="bell" type="font-awesome" color="blue" size="25" 
                        onPress={()=>{this.props.navigation.navigate("Notification")}}>
                            <Badge value={this.state.value} 
                            containerStyle={{position:'absolute', top:-4, right:-4}}>
                                
                            </Badge>
                        </Icon>
                    </View>
                </View>
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
})