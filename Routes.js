/* import React ,{Component} from 'react';
import {NativeRouter , Router,Route , Switch} from 'react-router-native'
import MarketPlaceApp from  './components/MarketPlaceApp';
import MarketPlaceList from './components/MarketPlaceList';
import MarketplaceCreateAdLayout from './components/MarketplaceCreateAdLayout';
import MarketplaceDetailedViewLayout from './components/MarketplaceDetailedViewLayout';
import MarketplaceGridRow  from './components/MarketplaceGridRow';
import PageHead from './components/PageHead';
import StatusBar from './components/StatusBar';


export default (
<Router history={history}>
       <Switch>
            <Route path="/MarketplaceCreateAdLayout" component={MarketplaceCreateAdLayout} /> 
       </Switch>
    </Router>
)


/*

     <Route path="MarketPlaceApp" component={MarketPlaceApp} />
       <Route path="MarketPlaceList" component={MarketPlaceList} /> 
       <Route path="MarketplaceDetailedViewLayout" component={MarketplaceDetailedViewLayout} /> 
       <Route path="MarketplaceGridRow" component={MarketplaceGridRow} /> 
       <Route path="PageHead" component={PageHead} /> 
       <Route path="StatusBar" component={StatusBar}/>
*/


