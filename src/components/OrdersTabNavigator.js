
import React, { Component } from 'react';
import {Platform} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// import {
//     RecentOrdersScreen,
//     RewardsScreen,
//     FavoriteOrdersScreen
// } from '../views';
import FavoriteOrdersScreen from '../views/rootStack/rootTabs/orderTabs/FavoriteOrdersScreen';
import RecentOrderScreen from '../views/rootStack/rootTabs/orderTabs/RecentOrdersScreen';

export default createMaterialTopTabNavigator(
    {
        RecentOrderScreen,
        FavoriteOrdersScreen,
    },
    {
        tabBarOptions: {
            style: {paddingTop: Platform.OS === 'ios' ? 30 : 0}
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
