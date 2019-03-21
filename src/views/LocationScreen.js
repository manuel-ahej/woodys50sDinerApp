import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {  TabBarIcon } from '../components';

export default class LocationScreen extends Component {
    static navigationOptions = {
        tabBarColor: 'black',
        tabBarLabel: 'Location',
        tabBarIcon: TabBarIcon('Fbuilding')
    }
    render() {
        return(
            <View style={styles.container}>
                <Text sytle={styles.text}>Location!</Text>
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
        fontSize: 20,
    },
  });