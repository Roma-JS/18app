import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import * as Constants from '../common/constants';

export default class CouponHeader extends Component {
    static propTypes = {
        headerTextStart: PropTypes.string.isRequired,
        headerTextQuantity: PropTypes.string.isRequired,
        headerTextEnd: PropTypes.string.isRequired,
    };

    render() {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.text}>
                    {this.props.headerTextStart}
                    <Text style={styles.textBold}>
                        {this.props.headerTextQuantity}
                    </Text>
                    {this.props.headerTextEnd}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 24,
    },
    text: {
        fontFamily: Constants.TITILLIUM_REGULAR,
        color: Constants.LIGHT_GREY,
        fontSize: 14,
    },
    textBold: {
        fontFamily: Constants.TITILLIUM_BOLD,
        color: Constants.LIGHT_GREY,
        fontSize: 14,
    },
});
