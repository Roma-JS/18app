import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CouponRow from '../component/CouponRow';

export default class Coupon extends Component {
    static navigationOptions = {
        title: 'I tuoi buoni',
    };

    render() {
        return (
            <View>
                <CouponRow
                    category="Cinema"
                    description="Biglietto d'ingresso"
                    price="8,00"
                />
                <CouponRow
                    category="Concerti"
                    description="Biglietto d'ingresso"
                    price="56,00"
                />
                <CouponRow
                    category="Teatro e danza"
                    description="Abbonamento / Card"
                    price="128,00"
                />
                <CouponRow
                    used={true}
                    category="Libri"
                    description="ebook"
                    merchant="Libreria Leggidipiù"
                    price="10,00"
                />
                <CouponRow
                    used={true}
                    category="Cinema"
                    description="Abbonamento / Card"
                    merchant="Nuovo Cinema Paradiso"
                    price="99,00"
                />
            </View>
        );
    }
}
