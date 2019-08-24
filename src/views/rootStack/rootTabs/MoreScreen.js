import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {  TabBarIcon } from '../../../components';
import colors from '../../../constants/colors';

export default class MoreScreen extends Component {
    static navigationOptions = {
        tabBarColor: colors.purple,
        tabBarLabel: 'More',
        tabBarIcon: TabBarIcon('Edots-three-horizontal')
    };

    render() {
        return(
            <View style={styles.container}>
                <Text sytle={styles.text}>More!</Text>
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