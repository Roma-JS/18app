import * as Constants from '../common/constants';
import {TabNavigator, TabBarTop} from 'react-navigation';
import CouponList from '../container/CouponList';

export default TabNavigator(
    {
        'coupons/all': {
            screen: CouponList,
            navigationOptions: {
                title: 'I tuoi buoni',
                tabBarLabel: 'TUTTI',
            },
        },
        'coupons/unused': {
            screen: CouponList,
            navigationOptions: {
                title: 'I tuoi buoni',
                tabBarLabel: 'DA SPENDERE',
            },
        },
        used: {
            screen: CouponList,
            navigationOptions: {
                title: 'I tuoi buoni',
                tabBarLabel: 'GIÀ SPESI',
            },
        },
    },
    {
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        animationEnabled: true,
        tabBarOptions: {
            labelStyle: {
                fontSize: 14,
                fontFamily: Constants.TITILLIUM_BOLD,
            },
            tabStyle: {
                height: 48,
            },
            indicatorStyle: {
                backgroundColor: Constants.WHITE,
            },
            style: {
                backgroundColor: Constants.SECONDAY_BLUE,
            },
        },
    },
);
