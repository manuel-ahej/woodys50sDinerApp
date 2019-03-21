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
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
// import {
//     SplashScreen,
//     LocationScreen,
//     RewardsScreen,
//     InboxScreen,
//     MoreScreen
// } from './src/views/';
import * as s from './src/views/';
import { OrdersTabNavigator, TabBarIcon } from './src/components';

const RootTabs = createMaterialBottomTabNavigator(
    {
        location: s.LocationScreen,
        order: {
            screen: OrdersTabNavigator, 
            navigationOptions: () => ({
                tabBarColor: '#EC44B5',
                tabBarLabel: 'Order',
                tabBarIcon: TabBarIcon('Mfood'),
            })
        },
        rewards: s.RewardsScreen,
        inbox: s.InboxScreen,
        more: s.MoreScreen,
    },
    {
        initialRouteName: 'rewards'
    }
);

const AuthStack = createStackNavigator(
    {
        signUp: s.SignUpScreen,
        signIn: s.SignInScreen,
        authHelp: s.AuthHelpScreen,
        forgotPass: s.ForgotPasswordScreen,
        passRecovery: s.PasswordRecoveryScreen
    },
    {
        initialRouteName: 'signUp',
    }
);

const RootStack = createStackNavigator(
    {
        home: RootTabs,
        aboutUs: s.AboutUsScreen,
        checkInScan: s.CheckInScanScreen,
        help: s.HelpScreen,
        inviteFriends: s.InviteFriendsScreen,
        locationDetails: s.LocationDetailsScreen,
        messageDetails: s.MessageDetailsScreen,
        nutritionInfo: s.NutritionInfoScreen,
        prevOrderDetails: s.PreviousOrderDetailsScreen,
        privacyTerms: s.PrivacyTermsScreen,
        profile: s.ProfileScreen,
        redeem: s.RedeemScreen,
        socialMedia: s.SocialMediaScreen,
        startNewOrder: s.StartNewOrderScreen
    },
    {
        initialRouteName: 'home'
    }
);

const RootSwitch = createSwitchNavigator(
    {
        splash: {
            screen: s.SplashScreen
        },
        auth: {
            screen: AuthStack
        },
        root: {
            screen: RootStack
        }
    },
    {
        initialRouteName: 'splash'
    }
);

// export default App = createAppContainer(RouteTabs);
// export default App = createAppContainer(OrdersTabNavigator);
const RootApp = createAppContainer(RootTabs);

export default App = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <RootApp/>
        </SafeAreaView>
    );
}

// export default class App extends Component {
//     render() {
//         <RecentOrdersScreen/>
//     }
// }

// const styles = StyleSheet.create({
//     flex: 1,

// });
