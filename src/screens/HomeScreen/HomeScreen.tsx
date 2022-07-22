import React from 'react';
import {FlatList, View} from 'react-native';
import ProductItem from '../../components/ProductItem';

import products from '../../data/products';

import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      {/* product component */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
