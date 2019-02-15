import React,{Component} from 'react';
import MarketPlaceApp from './components/MarketPlaceApp';
import {View , Text,StyleSheet } from 'react-native' ;
import {Router , Route , Switch} from 'react-router-native';
import createHistory from 'history/createMemoryHistory';
const history = createHistory();

export default class App extends React.Component {
  render() {
    return ( 
      <View Style={Styles.maincontainer}>
       <Router history={history}>
         <MarketPlaceApp />
        </Router> 
     </View>);
  }
}

const Styles = StyleSheet.create({
  maincontainer:{
    position: 'absolute',
    top:0,
    bottom: 0,
    height: '100%',
    width: '100%',
  }
})

