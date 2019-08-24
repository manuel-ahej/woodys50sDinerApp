import React, { Component } from 'react';
import EIcon from 'react-native-vector-icons/Entypo';
import AIcon from 'react-native-vector-icons/AntDesign';
import IIcon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const TabBarIcon = name => ({tintColor}) => {

    switch(name.slice(0,1)) {
        case ('E'):
            return (
                <EIcon
                    style={{backgroundColor: 'transparent'}}
                    name={`${name.substr(1)}`}
                    color={tintColor}
                    size={24}
                />
            );
        case ('A'):
            return (
                <AIcon
                    style={{backgroundColor: 'transparent'}}
                    name={`${name.substr(1)}`}
                    color={tintColor}
                    size={24}
                />
            );
        case ('I'):
            return (
                <IIcon
                    style={{backgroundColor: 'transparent'}}
                    name={`${name.substr(1)}`}
                    color={tintColor}
                    size={24}
                />
            );
        case ('M'):
            return (
                <MIcon
                    style={{backgroundColor: 'transparent'}}
                    name={`${name.substr(1)}`}
                    color={tintColor}
                    size={24}
                />
            );
        default:
            return (
                    <MIcon
                        name="food"
                    />
                )
            ;
    }
}

export default TabBarIcon;