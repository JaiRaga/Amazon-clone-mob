import React from 'react';
import {View} from 'react-native';
import ProductItem from '../../components/ProductItem';

import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      {/* product component */}
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </View>
  );
};

export default HomeScreen;
