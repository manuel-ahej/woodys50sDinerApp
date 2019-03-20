/**
 * Woody's 50's Diner Official App
 * React Native App
 * https://github.com/facebook/react-native
 * 
 * Authored by Manuel A. Hernandez-Estrada
 * E: mahej555@gmail.com
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {
    LocationScreen,
    // OrderScreen,
    RecentOrdersScreen,
    RewardsScreen,
    InboxScreen,
    MoreScreen
} from './src/views';
import { OrdersTabNavigator } from './src/components';

// const OrderTabs = crea

const RouteTabs = createBottomTabNavigator(
    {
        location: LocationScreen,
        // order: RecentOrdersScreen,
        order: OrdersTabNavigator,
        rewards: RewardsScreen,
        inbox: InboxScreen,
        more: MoreScreen,
    },
    {
        initialRouteName: 'rewards',
    }
);

export default App = createAppContainer(RouteTabs);

// export default class App extends Component {
//     render() {
//         <RecentOrdersScreen/>
//     }
// }


