import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabBarIcon } from '../components';

const test = TabBarIcon('Iios-gift');

export default class RewardsScreen extends Component {
    static navigationOptions = {
        tabBarColor: 'red',
        tabBarLabel: 'Rewards',
        tabBarIcon: test,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text sytle={styles.text}>Rewards!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {

    },
});