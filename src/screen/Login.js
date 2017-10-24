import React, {Component} from 'react';
import Expo from 'expo';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Platform, StyleSheet} from 'react-native';
import * as Constants from '../common/constants';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.loginText}>18app</Text>
                </View>
                <Image
                    source={require('../res/login/bg-cinema.png')}
                    style={styles.contentContainer}
                />
                <TouchableOpacity onPress={this.props.onLogin}>
                    <View style={styles.login}>
                        <Text style={styles.loginText}>ENTRA CON SPID</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    header: {
        paddingTop: Expo.Constants.statusBarHeight,
        backgroundColor: Constants.PRIMARY_BLUE,
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({
            ios: {
                height: Expo.Constants.statusBarHeight + 48,
            },
            android: {
                height: Expo.Constants.statusBarHeight + 56,
            },
        }),
    },
    contentContainer: {
        flex: 1,
        resizeMode: 'cover',
    },
    login: {
        height: 64,
        backgroundColor: Constants.PRIMARY_BLUE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        fontFamily: Constants.TITILLIUM_SEMIBOLD,
        fontSize: 16,
        color: Constants.WHITE,
    },
});
