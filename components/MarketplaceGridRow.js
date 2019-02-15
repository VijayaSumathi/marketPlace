
import React ,{Component } from 'react';
import {View ,Text ,StyleSheet ,Image,ImageBackground , Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MarketplaceDetailedViewLayout from './MarketplaceDetailedViewLayout';

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;



export default class MarketplaceGridRow extends Component {


    onClickFun = () =>{
        <marketplaceDetailedViewLayout />
    } 


 render(){
     return(
         <View style={styles.container}>
         <View style={styles.MarketGridRow} onclick={this.onClickFun.bind(this)}>
            <View style={styles.styleUpperSection}>
               <Image  style={styles.leftSection} source ={require('../images/image.jpg')} />
                <View  style={styles.rightSection} >
                    <Text style={styles.title}>Title </Text> 
                    <Icon name='ios-pricetag' style={styles.priceTag} size={20}  color='#000'/>
                    <Text style={styles.priceSection}> $20,00000 </Text>
                </View>                
            </View>
            <View style={styles.bottomSection}>
               <View style={styles.postedBySection} >
                    <Text style={styles.posted}>Posted by  </Text>
					<Text style={styles.user}>Sumathi</Text>
                </View>
            </View>
            </View>
            <View style={styles.MarketGridRow}>
            <View style={styles.styleUpperSection}>
               <Image  style={styles.leftSection} source ={require('../images/image.jpg')} />
                <View  style={styles.rightSection} >
                    <Text style={styles.title}>Title </Text> 
                    <Icon name='ios-pricetag' style={styles.priceTag} size={20}  color='#000'/>
                    <Text style={styles.priceSection}> $20,00000 </Text>
                </View>                
            </View>
            <View style={styles.bottomSection}>
               <View style={styles.postedBySection} >
                    <Text style={styles.posted}>Posted by  </Text>
					<Text style={styles.user}>Sumathi</Text>
                </View>
            </View>
          </View>
         </View>
         
         
     )
 }


}

const styles = StyleSheet.create({
    container:{
        marginTop:60,
    },
    MarketGridRow:{
        marginTop: 10,
        background: '#fff',
        marginRight:10,
        marginLeft:10,
    },
    styleUpperSection:{
        position: 'relative',
        height: 110,
        backgroundColor:'white',
    },
    leftSection:{
        width: 110,
		height:110,
  	//	backgroundImage: require('../../../../images/image_placeholder.png'),
    	backgroundSize: 'cover',
		position: 'absolute',
		top:0,
		left: 0,
    },
    rightSection:{
        height:'100%',
        marginLeft:120, 
        marginRight:0,  
        position: 'relative',  
       
    },
    priceTag:{
        position:'absolute',
        bottom:0,
        right:80,
        paddingRight:10,
        
    },
    priceSection:{
        position:'absolute',
        bottom:0,
        right:5
    },
    bottomSection:{
        height:40,
        borderTopColor:'#eee',
        borderTopWidth:2,
        backgroundColor:'white'
    },
    postedBySection:{
      flexDirection:"row",
      paddingTop:10,
      paddingLeft:10,
    },
    posted:{
        fontStyle: 'italic',
        color: '#7f7f7f'
    }

})