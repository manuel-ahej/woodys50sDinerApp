
import React, { Component } from 'react';
import {Platform, Dimensions} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// import {
//     RecentOrdersScreen,
//     RewardsScreen,
//     FavoriteOrdersScreen
// } from '../views';
import FavoriteOrdersScreen from '../views/rootStack/rootTabs/orderTabs/FavoriteOrdersScreen';
import RecentOrderScreen from '../views/rootStack/rootTabs/orderTabs/RecentOrdersScreen';
import OrdersTabBar from './OrdersTabBar';


export default createMaterialTopTabNavigator(
    {
        RecentOrderScreen,
        FavoriteOrdersScreen,
    },
    {
        tabBarComponent: props => <OrdersTabBar {...props} />,
        tabBarOptions: {
            style: {
                // backgroundColor: '#76CCE3',
                paddingTop: Platform.OS === 'ios' ? 30 : 0
            },
        //     labelStyle: {
        //         fontSize: 12,
        //     },
        //     tabStyle:{
        //         borderRadius: 0.5,
        //     },
        //     indicatorStyle: {
        //         borderRadius: 0.5,
        //         // height: 15,
        //         // width: (Dimensions.get('window').width * .5 - 20),
        //         // paddingBottom: 10,
        //         backgroundColor: 'white'
        //     },
        //     activeTintColor: 
        //         // '#76CCE3',
        //         'white',
        //     inactiveTintColor: 
        //         // 'white',
        //         'lightgray',
        }
    }
);

// const RouteNavigator = createAppContainer(RouteTabs);

// export default class OrdersTabNavigator extends Component {
//   render() {
//     return (
//       <RouteNavigator/>
//     );
//   }
// }
