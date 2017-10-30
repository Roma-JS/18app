import React, {Component} from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import * as Constants from '../common/constants';

const identity = {
    name: 'Mario',
    surname: 'Rossi',
    fiscalCode: 'RSSMRA98T10A562S',
    birthDay: '10/12/1998',
    birthPlace: 'San Giuliano Terme (PI)',
    address: 'Viale della Repubblica 171',
    postalCode: '31100',
    city: 'Treviso',
    province: '(TV)',
    mobile: '3331234567',
    email: 'mario.rossi@email.it',
};

export default class Profile extends Component {
    static navigationOptions = {
        title: 'Il tuo profilo',
    };

    render() {
        return (
            <ScrollView style={{flex: 1, paddingTop: 30}}>
                <View style={styles.viewContainer}>
                    <Text style={styles.textTop}>
                        {identity.name} {identity.surname}
                    </Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.text}>Codice fiscale</Text>
                    <Text style={styles.textInfo}>{identity.fiscalCode}</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.text}>Data e luogo di nascita</Text>
                    <Text style={styles.textInfo}>{identity.birthDay}</Text>
                    <Text style={styles.textInfo}>{identity.birthPlace}</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.text}>Residenza</Text>
                    <Text style={styles.textInfo}>{identity.address}</Text>
                    <Text style={styles.textInfo}>
                        {identity.postalCode} {identity.city}{' '}
                        {identity.province}
                    </Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.text}>Recapiti</Text>
                    <Text style={styles.textInfo}>{identity.mobile}</Text>
                    <Text style={styles.textInfo}>{identity.email}</Text>
                </View>
                <View style={styles.viewContainer}>
                    <Text style={styles.textBottom}>
                        Questo &egrave; il riepilogo dei dati della tua
                        identit&agrave; SPID: per modificarli rivolgiti al tuo
                        gestore.
                    </Text>
                </View>
                <View style={styles.viewContainer}>
                    <Image
                        style={styles.icon}
                        source={require('../res/logo-poste.png')}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        paddingHorizontal: 20,
        paddingBottom: 14,
    },
    textTop: {
        fontFamily: Constants.TITILLIUM_REGULAR,
        fontSize: 24,
        color: Constants.DARK_GREY,
    },
    text: {
        fontFamily: Constants.TITILLIUM_REGULAR,
        fontSize: 12,
        color: Constants.SECONDARY_GREY,
    },
    textInfo: {
        color: Constants.DARK_GREY,
        fontFamily: Constants.TITILLIUM_REGULAR,
        fontSize: 16,
    },
    textBottom: {
        color: Constants.SECONDARY_GREY,
        fontFamily: Constants.TITILLIUM_REGULAR,
        fontSize: 14,
    },
    icon: {
        height: 37,
        width: 132,
    },
});
