import React, { Component } from 'react';
import {Text,Alert, View,Dimensions,StyleSheet , ImageBackground,Button,Image} from 'react-native';
import {Link } from 'react-router-native';
import StatusBar from './StatusBar';
import '../Collection/globalData';
import PageHead from './PageHead';
import MarketplaceCreateAdLayout from './MarketplaceCreateAdLayout';
import MarketPlaceList from './MarketPlaceList';
import MarketplaceGridRow from './MarketplaceGridRow';
import MarketplaceDetailedViewLayout from './MarketplaceDetailedViewLayout'
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height; 



export default class MarketPlaceApp  extends Component{

 constructor(props){
   super(props)
   this.state = {
    pageName :globalStore.pageNameObj.home,
   }
 }

 createAd(e){
  this .setState({pageName:globalStore.pageNameObj.createAd});  
 /*  Alert.alert(
    'You need to...'
 ) */
}
userBtnHandle(e){
  this .setState({pageName:globalStore.pageNameObj.userProfile}); 
}

 postFirstAd(){
      this.setState({pageName:globalStore.pageNameObj.createAd}); 
} 
    
 selectedPage(pageName) {

    if(pageName === globalStore.pageNameObj.home){
                var homePageElement =
                <View   style={styles.noads}>
                    <Image source={require('../images/noads-new.png')}></Image>
                    <Text  
                        style={styles.postyouradd} 
                        onPress = {this.postFirstAd.bind(this)}
                    >POST YOUR AD</Text>
                </View>  ;  
            return(
              <View style={styles.pageBox}>
                <PageHead 
                    // leftBtnHandleFn = {this.backButtonHandle.bind(this)}
                      leftBtn="close"
                      pageTitle="MarketPlace"
                      iconUser="user"
                      iconPlus="plus"
                      createAd={this.createAd.bind(this)}
                      userBtnHandle={this.userBtnHandle.bind(this)}
                  />
                    {homePageElement}
              </View> )
      }

      if(pageName === globalStore.pageNameObj.createAd){
            return (
              <View style={styles.pageBox}>   
                <PageHead 
                    leftBtn="arrowleft"
                    pageTitle="Create Ad"
                    rightBtnName="Publish"
                    createAd={this.createAd}
                    userBtnHandle={this.userBtnHandle}
                />
                <MarketplaceCreateAdLayout /> 
              </View>)
      }
       
      if(pageName === globalStore.pageNameObj.userProfile){
          return (
            <View style={styles.pageBox} >
                <PageHead 
                    leftBtn="arrowleft"
                    pageTitle='My Ads'
                    rightBtnName="Publish"
                    createAd={this.createAd}
                    userBtnHandle={this.userBtnHandle}
                />
                <MarketplaceGridRow />
            </View>
            );
      }
  

      }
 
    
    render(){
         
            return(<View style = {styles.vl}>
                  <StatusBar backgroundColor="#2EBD6B" barStyle="light-content" />
                  { this.selectedPage(this.state.pageName) } 
             </View>)
    }
}

const styles= StyleSheet.create({
  vl:{
    width:deviceWidth,
    height:deviceHeight,
    backgroundColor:'rgb(236, 241, 242)',
  },
  noads:{
        top:deviceHeight*30/100,
        left:deviceHeight*10/100,
        position: 'absolute',
      
  },
  postyouradd:{
    color:'white',
    borderWidth:1,
    borderColor:'rgb(142, 104, 173)',
    backgroundColor:' rgb(142, 104, 173)',
    marginTop:20,
    padding:10,
    textAlign: 'center',
  }
})