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
import { SafeAreaView } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {
    LocationScreen,
    RewardsScreen,
    InboxScreen,
    MoreScreen
} from './src/views';
import { OrdersTabNavigator, TabBarIcon } from './src/components';

// const OrderTabs = crea

const RouteTabs = createMaterialBottomTabNavigator(
    {
        location: LocationScreen,
        order: {
            screen: OrdersTabNavigator, 
            navigationOptions: () => ({
                tabBarColor: '#EC44B5',
                tabBarLabel: 'Order',
                tabBarIcon: TabBarIcon('Mfood'),
            })
        },
        rewards: RewardsScreen,
        inbox: InboxScreen,
        more: MoreScreen,
    },
    {
        initialRouteName: 'rewards'
    }
);

// export default App = createAppContainer(RouteTabs);
// export default App = createAppContainer(OrdersTabNavigator);
const RootApp = createAppContainer(RouteTabs);

export default App = () =>
    <SafeAreaView style={{flex: 1}}>
        <RootApp/>
    </SafeAreaView>;

// export default class App extends Component {
//     render() {
//         <RecentOrdersScreen/>
//     }
// }

// const styles = StyleSheet.create({
//     flex: 1,

// });
