import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import moment from 'moment';
import Button from '../component/Button';
import * as Constants from '../common/constants';
import Categories from '../common/categories';

const DATA = {
    used: new Date('2017-03-12T23:12:00'),
    category: 'Cinema',
    description: 'Abbonamento / Card',
    merchant: {
        name: 'Nuovo Cinema Paradiso',
        place: 'San Valentino in Abbruzzo Citerione (PE)',
    },
    price: '99,00',
    code: '45DH6789',
};

export default class Coupon extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>{DATA.merchant.name}</Text>
                    <View style={styles.headerSubtitle}>
                        <Image
                            style={styles.headerIcon}
                            source={require('../res/icon-marker-white.png')}
                        />
                        <Text style={styles.headerText}>
                            {DATA.merchant.place}
                        </Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.couponUsedText}>
                        Buono utilizzato il{' '}
                        {moment(DATA.used).format(
                            'DD MMMM Y [ alle ore ] HH:mm',
                        )}
                    </Text>
                    <View style={styles.rowContainer}>
                        <View style={styles.iconContainer}>
                            <Image
                                style={styles.icon}
                                source={Categories[DATA.category].icon}
                            />
                        </View>
                        <Text style={styles.categoryText}>{DATA.category}</Text>
                        <Text style={styles.textLight}>Categoria</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.iconContainer}>
                            <Image
                                style={styles.icon}
                                source={require('../res/icon-gift.png')}
                            />
                        </View>
                        <Text style={styles.productText}>
                            {DATA.description}
                        </Text>
                        <Text style={styles.textLight}>Prodotto</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.iconContainer}>
                            <Image
                                style={styles.icon}
                                source={require('../res/icon-euro.png')}
                            />
                        </View>
                        <Text style={styles.valueText}>{DATA.price}</Text>
                        <Text style={styles.textLight}>Valore</Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <View style={styles.iconContainer}>
                            <Image
                                style={styles.icon}
                                source={require('../res/icon-qrcode.png')}
                            />
                        </View>
                        <Text style={styles.codeText}>{DATA.code}</Text>
                        <Text style={styles.textLight}>Codice</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        icon={require('../res/icon-marker-white.png')}
                        text="DETTAGLI DEL NEGOZIO"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#003E90',
        paddingLeft: 24,
        paddingVertical: 20,
    },
    headerTitle: {
        fontFamily: Constants.TITILLIUM_BOLD,
        fontSize: 32,
        color: Constants.WHITE,
        lineHeight: 32,
        marginBottom: 10,
    },
    headerIcon: {
        tintColor: Constants.WHITE,
        height: 21,
        width: 16,
    },
    headerText: {
        fontFamily: Constants.TITILLIUM_REGULAR,
        fontSize: 14,
        fontStyle: 'italic',
        color: Constants.WHITE,
        paddingLeft: 14,
    },
    headerSubtitle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    couponUsedText: {
        color: Constants.RED,
        fontFamily: Constants.TITILLIUM_BOLD,
        fontSize: 14,
        textAlign: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: Constants.LINE_GREY,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },
    iconContainer: {
        alignItems: 'center',
        paddingLeft: 24,
        paddingRight: 24,
    },
    icon: {
        height: 24,
        width: 24,
        tintColor: Constants.ICON_GREY,
    },
    categoryText: {
        fontFamily: Constants.TITILLIUM_REGULAR,
        fontSize: 16,
        flex: 1,
    },
    productText: {
        fontFamily: Constants.TITILLIUM_REGULAR,
        fontSize: 16,
        flex: 1,
    },
    valueText: {
        fontFamily: Constants.TITILLIUM_BOLD,
        fontSize: 24,
        flex: 1,
        textDecorationLine: 'line-through',
    },
    codeText: {
        fontFamily: Constants.TITILLIUM_BOLD,
        fontSize: 24,
        flex: 1,
    },
    textLight: {
        fontFamily: Constants.TITILLIUM_REGULAR,
        fontSize: 12,
        color: Constants.LIGHT_GREY,
        paddingRight: 21,
    },
    buttonContainer: {
        paddingHorizontal: 20,
        paddingVertical: 17,
    },
});
