import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class SignInScreen extends Component {
    render() {
        const {navigate} = this.props.navigation
        return(
            <View style={styles.container}>
                <Text sytle={styles.text}>SignIn!</Text>
                <Button
                    onPress={() => navigate('app')}
                    title='Sign In'
                />
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