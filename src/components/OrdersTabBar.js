import React, { } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import colors from '../constants/colors';
// import PropTypes from 'prop-types';

// import { Box } from 'react-native-design-utility';
// import TopTabBarItem from './TopTabBarItem';

const TabButton = (props) => {

    const { navigation, routeName, isActive } = props;

    console.log(props.navigationOptions);

    const handlePress = () => {
        navigation.navigate(routeName);
    };

    return (
        <TouchableOpacity
            style={
                [
                    styles.button, 
                    {
                        backgroundColor: 
                            isActive? 'white' : 'transparent'
                    }
                ]
            }
            onPress={handlePress}
        >
            <Text
                style={[
                    styles.text,
                    {
                        color: 
                            isActive? colors.pink : 'white'
                    }
                ]}
            >
                {routeName}
            </Text>
        </TouchableOpacity>
    );
}

const OrdersTabBar = (props) => {
    const { navigation } = props;

    const { routes, index } = navigation.state;

    return (
        <View style={styles.container}>
            <View style={styles.tabBar} >
                <View style={styles.buttonGroup} >
                    {routes.map((route, i) => (
                        <TabButton
                            navigation={navigation}
                            key={route.routeName}
                            {...route}
                            isActive={index === i}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.pink,
        paddingTop: Platform.OS === 'ios' ? 30 : 0,
    },
    tabBar: {
        // h={60} bg="white" dir="row" shadow={0}
        height: 60,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonGroup: {
        flexDirection: 'row',
        height: 25,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 25,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 2.5,
        height: 20,
        borderRadius: 20,
    },
    text: {
        fontSize: 12,
    }
});

export default OrdersTabBar;