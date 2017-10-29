import React, {Component} from 'react';
import {FlatList} from 'react-native';
import CouponRow from '../component/CouponRow';
import CouponHeader from '../component/CouponHeader';

export default class CouponList extends Component {
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
                category: 'Musei, monumenti, parchi naturali',
                description: 'Abbonamento / Card',
                price: '150,00',
            },
            {
                category: 'Eventi culturali',
                description: 'Abbonamento / Card',
                price: '18,00',
            },
            {
                used: new Date('2017', '03', '12', '23', '12'),
                category: 'Libri',
                description: 'ebook',
                merchant: {
                    name: 'Libreria Leggidipiù',
                    place: 'San Valentino in Abbruzzo Citerione (PE)',
                },
                price: '5,00',
                code: '45DH6789',
            },
            {
                used: new Date('2017', '03', '12', '23', '12'),
                category: 'Cinema',
                description: 'Abbonamento / Card',
                merchant: {
                    name: 'Nuovo Cinema Paradiso',
                    place: 'San Valentino in Abbruzzo Citerione (PE)',
                },
                price: '99,00',
                code: '45DH6789',
            },
            {
                used: new Date('2017', '03', '12', '23', '12'),
                category: 'Libri',
                description: 'ebook',
                merchant: {
                    name: 'Libreria Leggidipiù',
                    place: 'San Valentino in Abbruzzo Citerione (PE)',
                },
                price: '5,00',
                code: '45DH6789',
            },
            {
                used: new Date('2017', '03', '12', '23', '12'),
                category: 'Cinema',
                description: 'Abbonamento / Card',
                merchant: {
                    name: 'Nuovo Cinema Paradiso',
                    place: 'San Valentino in Abbruzzo Citerione (PE)',
                },
                price: '99,00',
                code: '45DH6789',
            },
        ];
        return (
            <FlatList
                ListHeaderComponent={() => <CouponHeader coupons={coupons} />}
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
