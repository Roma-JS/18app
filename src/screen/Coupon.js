import React, {Component} from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import moment from 'moment';
import Button from '../component/Button';
import * as Constants from '../common/constants';
import Categories from '../common/categories';

const DATA = {
    //used: new Date('2017-03-12T23:12:00'),
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
    static navigationOptions = {
        title: 'Dettagli del buono',
    };

    _renderMerchant() {
        if (!DATA.used) {
            return null;
        }

        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>{DATA.merchant.name}</Text>
                <View style={styles.headerSubtitle}>
                    <Image
                        style={styles.headerIcon}
                        source={require('../res/icon-marker-white.png')}
                    />
                    <Text style={styles.headerText}>{DATA.merchant.place}</Text>
                </View>
            </View>
        );
    }

    _renderUsedTitle() {
        if (!DATA.used) {
            return null;
        }

        return (
            <Text style={styles.couponUsedText}>
                Buono utilizzato il{' '}
                {moment(DATA.used).format('DD MMMM Y [ alle ore ] HH:mm')}
            </Text>
        );
    }

    _renderBottom() {
        if (DATA.used) {
            return (
                <View style={styles.buttonContainer}>
                    <Button
                        icon={require('../res/icon-marker-white.png')}
                        text="DETTAGLI DEL NEGOZIO"
                    />
                </View>
            );
        }

        return (
            //View per qrcode e barcode
            <View>
                <View>
                    <Text>Qui il QRcode</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        icon={require('../res/icon-marker-white.png')}
                        text="TROVA UN NEGOZIO"
                    />
                </View>
                <Text style={styles.disclaimer}>
                    Questo buono non &egrave; cedibile e appartiene a te.
                </Text>
                <View style={styles.rowContainer}>
                    <View style={styles.iconContainer}>
                        <Image
                            style={styles.icon}
                            source={Categories[DATA.category].icon}
                        />
                    </View>
                    <Text style={styles.disclaimerIdentity}>Mario Rossi</Text>
                    <Text style={styles.textLight}>Intestatario</Text>
                </View>
                <Text style={styles.disclaimer}>
                    Puoi annullare in ogni momento questo buono e riversare
                    l'intero suo valore nel tuo credito
                </Text>
                <View style={styles.buttonContainer}>
                    <Button
                        icon={require('../res/icon-marker-white.png')}
                        text="ANNULLA QUESTO BUONO"
                        style={styles.buttonDeleteContainer}
                    />
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                {this._renderMerchant()}
                <View style={{flex: 1}}>
                    {this._renderUsedTitle()}
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
                        <Text
                            style={[
                                styles.valueText,
                                DATA.used ? styles.usedText : null,
                            ]}>
                            {DATA.price}
                        </Text>
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
                {this._renderBottom()}
            </ScrollView>
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
        color: Constants.ICON_GREY,
    },
    productText: {
        fontFamily: Constants.TITILLIUM_REGULAR,
        fontSize: 16,
        flex: 1,
        color: Constants.ICON_GREY,
    },
    valueText: {
        fontFamily: Constants.TITILLIUM_BOLD,
        fontSize: 24,
        flex: 1,
        color: Constants.ICON_GREY,
    },
    usedText: {
        textDecorationLine: 'line-through',
    },
    codeText: {
        fontFamily: Constants.TITILLIUM_BOLD,
        fontSize: 24,
        flex: 1,
        color: Constants.ICON_GREY,
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
    buttonDeleteContainer: {
        backgroundColor: Constants.RED,
    },
    disclaimer: {
        fontFamily: Constants.TITILLIUM_REGULAR,
        fontSize: 14,
        color: Constants.LIGHT_GREY,
        paddingLeft: 24,
        paddingRight: 21,
    },
    disclaimerIdentity: {
        color: Constants.ICON_GREY,
        fontFamily: Constants.TITILLIUM_BOLD,
        fontSize: 16,
        flex: 1,
    },
    // disclaimerMinor: {
    //     fontFamily: Constants.TITILLIUM_REGULAR,
    //     fontSize: 12,
    //     color: Constants.LIGHT_GREY,
    // },
});
