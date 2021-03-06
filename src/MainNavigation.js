import React from 'react';
import Expo from 'expo';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import {Platform, StyleSheet} from 'react-native';
import * as Constants from './common/constants';
import Drawer from './container/Drawer';
import Home from './screen/Home';
import Profile from './screen/Profile';
import Coupons from './screen/Coupons';
import Coupon from './screen/Coupon';
import HeaderProfileButton from './component/HeaderProfileButton';
import Shops from './screen/Shops';
import Shop from './screen/Shop';

const stackNavigator = StackNavigator(
    {
        Home: {
            screen: Home,
        },
        coupons: {
            screen: Coupons,
        },
        'coupons/details': {
            screen: Coupon,
        },
        shops: {
            screen: Shops,
        },
        'shops/single': {
            screen: Shop,
        },
        profile: {
            screen: Profile,
        },
    },
    {
        cardStyle: {
            backgroundColor: '#fff',
        },
        navigationOptions: () => ({
            headerRight: <HeaderProfileButton />,
            headerStyle: [
                {
                    backgroundColor: Constants.PRIMARY_BLUE,
                },
                styles.navigationPadding,
            ],
            headerTitleStyle: {
                color: '#fff',
            },
        }),
    },
);

export default DrawerNavigator(
    {
        root: {
            screen: stackNavigator,
        },
    },
    {
        drawerPosition: 'right',
        contentComponent: Drawer,
    },
);

const styles = StyleSheet.create({
    navigationPadding: {
        ...Platform.select({
            ios: {
                // pass
            },
            android: {
                paddingTop: Expo.Constants.statusBarHeight,
                height: Expo.Constants.statusBarHeight + 56,
            },
        }),
    },
});
