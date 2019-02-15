import React ,{ Component } from 'react';
import {View ,Button,StyleSheet , Dimensions, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;



export default class PageHead extends Component{
    
   /*  leftBtnHandle(e) {
		if(this.props.leftBtnHandleFn){
			this.props.leftBtnHandleFn(e);
		}
        e.stopPropagation(); 
        e.preventDefault();
	} */
    
  /*   createAd() {
        this.props.createAd;
    } */


    render(){
        const { } = this.props
        return(
          <View style={styles.pagehead}>
                   <AntDesign name={ this.props.leftBtn} 
                            style={styles.backArrow} 
                            size={35} 
                            color="#900"
                           // onPress={this.leftBtnHandle.bind(this)}

                    />
                   <Text style={styles.title}>{this.props.pageTitle ? this.props.pageTitle : ''}</Text>
                   <Text   
                    style={styles.rightBtnName } 
                    >{this.props.rightBtnName ? (this.props.rightBtnName) : ("")}</Text>
                   
                   <AntDesign 
                      name={this.props.iconPlus} 
                      size={30}  
                      style={styles.iconPlus} on
                      onPress={this.props.createAd}
                      />
                   
                   <AntDesign 
                        name={this.props.iconUser} 
                        size={30}     
                        style={styles.iconUser}
                        onPress={this.props.userBtnHandle}/>

         </View>

           ); 
   }
} 

const styles= StyleSheet.create({
    pagehead: {
        width:deviceWidth,
        flexDirection: 'row',
        position:'absolute',
        backgroundColor:'white',
        height:deviceHeight*8/100,
    },
    
    backArrow:{    
        color:'rgb(142, 104, 173)', 
        marginTop:10,
    },

    title:{
        marginLeft: 100,
        marginTop:15,
    },

    iconUser:{
        position: 'absolute', 
        marginTop:10,
        right: 5,      
        color: 'rgb(142, 104, 173)',
        cursor:'pointer'
    },

    iconPlus:{
        position: 'absolute',
        marginTop:10, 
        right: 60,      
        color: 'rgb(142, 104, 173)',
        cursor:'pointer',
    },

    rightBtnName:{
        position: 'absolute', 
        right: 5,      
        marginTop:10,
        color: 'rgb(142, 104, 173)',
    }
})