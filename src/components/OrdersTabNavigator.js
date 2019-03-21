
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// import {
//     RecentOrdersScreen,
//     RewardsScreen,
//     FavoriteOrdersScreen
// } from '../views';
import FavoriteOrdersScreen from '../views/FavoriteOrdersScreen'
import RecentOrderScreen from '../views/RecentOrdersScreen'

export default createMaterialTopTabNavigator(
    {
        RecentOrderScreen,
        FavoriteOrdersScreen,
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
