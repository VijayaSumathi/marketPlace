import React ,{Component} from 'react';
import {Text, View,StyleSheet , Dimensions} from 'react-native';
import PageHead from './PageHead';

export default class MarketPlaceList extends Component {
    render(){
        return(
            <View style={styles.Container}>
              <PageHead
                title="MarketPlace"
              />
            </View>
        )


    }
}

const styles= StyleSheet.create({

})