import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class SignUpScreen extends Component {
    render() {
        const {navigate} = this.props.navigation
        return(
            <View style={styles.container}>
                <Text sytle={styles.text}>SignUp!</Text>
                <Button
                    onPress={() => navigate('app')}
                    title='Sign Up'
                />
                <Button
                    onPress={() => navigate('signIn')}
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