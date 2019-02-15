import React ,{ Component } from 'react';
import {View ,Image,Text,StyleSheet,TextInput ,TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default  class MarketplaceDetailedViewLayout extends Component{

    render(){
        return(
            <View style={styles.DetailedView}>
              <View style={styles.Details}>
                <Text style={styles.titleSection} >Title</Text>
                <View style={styles.price} flexDirection='row'>
                    <Icon name='ios-pricetag' style={styles.priceTag} size={20}  color='rgb(96, 58, 126)'/>
                    <Text>2000</Text>
                </View>
                <Text style={styles.descSection}>  Description of Text  </Text>
                <Image  style={styles.image} source ={require('../images/image.jpg')} />
                <View style={styles.postedBySection} >
                    <Text style={styles.posted}>Posted by  </Text>
					<Text style={styles.user}>Sumathi</Text>
                </View>
                <View style={styles.buttonSection}>
                <MaterialIcons style={styles.materialIcons}  name='email' size={40} />
                <MaterialIcons style={styles.materialIcons}  name='call' size={40} />

                </View>
                <Text style={styles.time}>16 days</Text>
                <View style={styles.replySection}>
					<Text style={styles.replyWord}>REPLIES</Text>
                </View>
             <View style={styles.commentbox}> 
                    <TextInput
                    style={styles.textinput}
                        multiline={true}
                    //  onChangeText={(text) => this.setState({text})}
                        placeholder="Reply"
                                        />
                   <TouchableHighlight     style={styles.submit}>
                       <Text    style={styles.submitText}>Send</Text>
                   </TouchableHighlight>
            </View>
            </View>
    </View>)
    }


}

const styles = StyleSheet.create({
    DetailedView:{
        marginTop:60,
        height:'100%',
       /*  borderWidth:1,
        borderColor:'black', */
        backgroundColor:'#eee',
        paddingLeft:10,
        paddingRight:10, 
        paddingBottom:10,
        paddingTop:10,
    },
    priceTag:{
        paddingRight:10,
    },
    descSection:{
        paddingTop:10,
        paddingBottom:10,
    },
    titleSection:{
        paddingTop:10,
    },
    price:{
        paddingTop:10,
    },
    image:{
        width:100,
        height:100
    },
    postedBySection:{
        flexDirection:"row",
        paddingTop:10,
      },
      posted:{
          fontStyle: 'italic',
          color: '#7f7f7f'
      },
      time:{
          paddingTop:10
      } ,
      replyWord:{
       color:'#cbcbcb',
       borderBottom:'#cbcbcb',
       borderBottomWidth:1,

      },
      materialIcons:{
        color:'rgb(96, 58, 126)',
      },
      buttonSection:{
             flexDirection:'row',
             right: 5, 
             position:'absolute',
             top:200
    },
    replySection:{
        paddingBottom:10,
    },
    commentbox:{
        flexDirection:'row',
    },
          textinput:{
              padding:5,
              borderWidth:1,
              borderColor:' #cbcbcb',
              height: 32,
              borderRadius: 5,
              backgroundColor:'#fff',
              width:'65%',
              marginRight:10,
          },
          submit:{
            height: 32,
            width:100,   
            paddingTop:5,
            paddingBottom:5, 
            right:0,
            backgroundColor:'rgb(96, 58, 126)',
            borderRadius:5,
            borderWidth: 1,
            borderColor: '#fff',
            
          },
          submitText:{
              color:'#fff',
              textAlign:'center',
          }

})