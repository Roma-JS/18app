import React from 'react';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';
import {Platform, StyleSheet} from 'react-native';
import * as Constants from './common/constants';
import Home from './screen/Home';
import Coupons from './screen/Coupons';
import HeaderProfileButton from './component/HeaderProfileButton';

export default StackNavigator({
  Home: {
    screen: Home,
  },
  Coupons: {
    screen: Coupons,
  },
}, {
  navigationOptions: ({ navigation, screenProps }) => ({
    headerRight: <HeaderProfileButton />,
    headerStyle: [{
      backgroundColor: Constants.PRIMARY_BLUE,
    }, styles.navigationPadding],
    headerTitleStyle: {
      color: '#fff'
    },
  })
});

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
    })
  }
});