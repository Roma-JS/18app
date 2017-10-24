import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import CouponRow from '../component/CouponRow';

export default class Coupon extends Component {
    static navigationOptions = {
        title: 'I tuoi buoni',
    };

    render() {
        const coupons = [
            {
                category: 'Cinema',
                description: "Biglietto d'ingresso",
                price: '8,00',
            },
            {
                category: 'Concerti',
                description: "Biglietto d'ingresso",
                price: '56,00',
            },
            {
                category: 'Teatro e danza',
                description: 'Abbonamento / Card',
                price: '128,00',
            },
            {
                used: true,
                category: 'Libri',
                description: 'ebook',
                merchant: 'Libreria Leggidipiù',
                price: '5,00',
            },
            {
                used: true,
                category: 'Cinema',
                description: 'Abbonamento / Card',
                merchant: 'Nuovo Cinema Paradiso',
                price: '99,00',
            },
            {
                category: 'Cinema',
                description: "Biglietto d'ingresso",
                price: '8,00',
            },
            {
                category: 'Concerti',
                description: "Biglietto d'ingresso",
                price: '56,00',
            },
            {
                category: 'Teatro e danza',
                description: 'Abbonamento / Card',
                price: '128,00',
            },
            {
                used: true,
                category: 'Libri',
                description: 'ebook',
                merchant: 'Libreria Leggidipiù',
                price: '5,00',
            },
            {
                used: true,
                category: 'Cinema',
                description: 'Abbonamento / Card',
                merchant: 'Nuovo Cinema Paradiso',
                price: '99,00',
            },
        ];
        return (
            <FlatList
                data={coupons}
                renderItem={({item}) => (
                    <CouponRow
                        used={item.used}
                        category={item.category}
                        description={item.description}
                        merchant={item.merchant}
                        price={item.price}
                    />
                )}
            />
        );
    }
}
