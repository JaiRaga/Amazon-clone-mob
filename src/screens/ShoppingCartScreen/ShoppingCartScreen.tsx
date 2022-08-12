import React from 'react';
import {FlatList, View} from 'react-native';
import CartProductItem from '../../components/CartProductItem';

import products from '../../data/cart';

import styles from './styles';

const ShoppingCartScreen = () => {
  return (
    <View style={styles.root}>
      {/* product component */}
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ShoppingCartScreen;
