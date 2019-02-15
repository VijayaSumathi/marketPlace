import React from 'react';
import {AppRegistry,Text,ScrollView ,Button, View ,TextInput,StyleSheet,Dimensions } from 'react-native';
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

export default class MarketplaceCreateAdLayout extends React.Component{
	render() {
		return (
    <ScrollView  style={styles.createAdview}>
             <View  style={styles.title}>
                <Text style={styles.text} >Title *
                    <Text style={styles.wordsLeft} >Max 150 Characters </Text>
                </Text>             
             </View>  
             
             <TextInput  
                style={styles.inputField} 
                multiline={true}
                placeholder="Write an interesting heading"
                editable = {true}
                maxLength = {150}
            />

            <View  style={styles.title}>
                <Text style={styles.text}>Price *</Text>
            </View>
            <TextInput 
                style={styles.textInput}
                editable = {true}
                placeholder="Price " 
             />


            <View  style={styles.title}>
                   <Text style={styles.text}>Description</Text>                        
           </View>

           <TextInput 
                style={styles.description}
                multiline={true}
                editable = {true}
                placeholder="Write all the details" 
             />

        	<View  >
                <Text style={styles.text} >Phone</Text>
        	</View>

            <TextInput 
            style={styles.textInput}
                textContentType ="telephoneNumber" 
                placeholder="Phone Number"/>
           
            <View >
                <Text style={styles.text} >Email</Text>
        	</View>
            <TextInput 
               style={styles.textInput}
                textContentType ="emailAddress" 
                placeholder="test@sample.com"
            />
            
            <Button   style={styles.imageUpload}  size={15} title="Add Image"/>

       </ScrollView >
        )
	}
}

const styles = StyleSheet.create({
    createAdview:{
        //height: 10000,
        marginLeft:10,
        marginTop:70,
        marginRight:10,
        marginBottom:10,
        scrollEnabled:true,
    },
    title:{
        fontSize: 14,  
    },
    text:{
        fontWeight: 'bold',
    },
    wordsLeft:{
        color:'#cbcbcb',
        fontSize: 13
    },
    textInput:{
        backgroundColor:'white',
        textAlignVertical: 'top',
        borderColor:'#cbcbcb',
        borderWidth: 1,
        paddingLeft:5,
        paddingRight:5,
        paddingBottom:5,
        paddingTop:5,
        marginTop:5,
        marginBottom:5,
     },
     inputField:{
        backgroundColor:'white',
        textAlignVertical: 'top',
        borderColor:'#cbcbcb',
        borderWidth: 1,
        paddingLeft:5,
        paddingRight:5,
        paddingBottom:5,
        paddingTop:5,
        marginTop:5,
        marginBottom:5,
        height:15*deviceHeight/100,
     },
     description:{
        backgroundColor:'white',
        textAlignVertical: 'top',
        borderColor:'#cbcbcb',
        borderWidth: 1,
        paddingLeft:5,
        paddingRight:5,
        paddingBottom:5,
        paddingTop:5,
        marginTop:5,
        marginBottom:5,
        height:30*deviceHeight/100,
     },
    

})

