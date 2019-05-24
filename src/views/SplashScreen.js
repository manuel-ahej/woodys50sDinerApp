import React, { Component } from 'react';
import { 
    StyleSheet,
    View, 
    Button,
    ActivityIndicator,
    StatusBar } from 'react-native';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        // this._bootstrapAsync();
    }

    // // Fetch the token from storage then navigate to our appropriate place
    // _bootstrapAsync = async () => {
    //     const userToken = await true;

    //     // This will switch to the App screen or Auth screen and this loading
    //     // screen will be unmounted and thrown away.
    //     this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    // };

    // Render any loading content that you like here
    render() {
        const {navigate} = this.props.navigation
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
                <Button
                    onPress={() => navigate('app')}
                    title='Authenticated True'
                />
                <Button
                    onPress={() => navigate('auth')}
                    title='Authentication Fails'
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