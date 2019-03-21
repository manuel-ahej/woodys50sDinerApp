import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class SignUpScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text sytle={styles.text}>SignUp!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    text: {
        
    },
  });