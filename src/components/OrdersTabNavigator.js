import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {
    RecentOrdersScreen,
    RewardsScreen,
    FavoriteOrdersScreen
} from '../views';

export default OrdersTabNavigator = createMaterialTopTabNavigator(
    {
        RewardsScreen,
        FavoriteOrdersScreen,
    }
    // {
    //   initialRouteName: 'Recent',
    // }
);

// const RouteNavigator = createAppContainer(RouteTabs);

// export default class OrdersTabNavigator extends Component {
//   render() {
//     return (
//       <RouteNavigator/>
//     );
//   }
// }
