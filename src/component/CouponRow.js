import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import * as Constants from '../common/constants';

export default class CouponRow extends Component {
    static propTypes = {
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        merchant: PropTypes.string,
        used: PropTypes.bool,
        price: PropTypes.string.isRequired,
    };

    render() {
        let merchant = null;
        let icon = null;

        switch (this.props.category) {
            case 'Cinema':
                icon = require('../res/icon-cinema-06c.png');
                break;
            case 'Libri':
                icon = require('../res/icon-libri-06c.png');
                break;
            case 'Teatro e danza':
                icon = require('../res/icon-teatro-06c.png');
                break;
            case 'Concerti':
                icon = require('../res/icon-concerti-06c.png');
                break;
        }

        if (this.props.merchant) {
            merchant = (
                <Text
                    style={[
                        styles.merchant,
                        this.props.used ? styles.merchant : null,
                    ]}>
                    {this.props.merchant}
                </Text>
            );
        }

        return (
            <View style={styles.rowContainer}>
                <View style={styles.iconContainer}>
                    <Image
                        source={icon}
                        style={[
                            styles.icon,
                            this.props.used ? styles.iconUsed : null,
                        ]}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text
                        style={[
                            styles.category,
                            this.props.used ? styles.usedText : null,
                        ]}>
                        {this.props.category}
                    </Text>
                    <Text
                        style={[
                            styles.description,
                            this.props.used ? styles.usedText : null,
                        ]}>
                        {this.props.description}
                    </Text>
                    {merchant}
                </View>
                <View>
                    <Text
                        style={[
                            styles.price,
                            this.props.used ? styles.usedPrice : null,
                        ]}>
                        {this.props.price} €
                    </Text>
                </View>
                <View style={styles.arrowContainer}>
                    <Text
                        style={[
                            styles.arrow,
                            this.props.used ? styles.usedText : null,
                        ]}>
                        >
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    iconUsed: {
        width: 24,
        height: 24,
        tintColor: Constants.GREY,
    },
    usedText: {
        color: Constants.GREY,
    },
    usedPrice: {
        color: Constants.GREY,
        textDecorationLine: 'line-through',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: Constants.LINE_GREY,
    },
    iconContainer: {
        alignItems: 'center',
        paddingLeft: 24,
        paddingRight: 24,
    },
    titleContainer: {
        flex: 1,
    },
    category: {
        fontFamily: Constants.TITILLIUM_BOLD,
        color: Constants.PRIMARY_BLUE,
        fontSize: 16,
    },
    description: {
        fontFamily: Constants.TITILLIUM_REGULAR,
        color: Constants.PRIMARY_BLUE,
        fontSize: 14,
    },
    merchant: {
        fontFamily: Constants.TITILLIUM_REGULAR,
        color: Constants.SECONDARY_GREY,
        fontSize: 14,
    },
    arrowContainer: {
        alignItems: 'center',
    },
    price: {
        fontFamily: Constants.TITILLIUM_BOLD,
        color: Constants.PRIMARY_BLUE,
        paddingLeft: 24,
        alignItems: 'center',
        fontSize: 20,
    },
    arrow: {
        fontFamily: Constants.TITILLIUM_BOLD,
        color: Constants.PRIMARY_BLUE,
        paddingRight: 24,
        paddingLeft: 16,
        alignItems: 'center',
    },
});
