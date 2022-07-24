import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import product from '../../data/product';

import styles from './styles';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image Carousel */}

      {/* Option Selector */}
      <Picker selectedValue={selectedOption} onValueChange={setSelectedOption}>
        {product.options.map(option => (
          <Picker.Item key={Date.now()} label={option} value={option} />
        ))}
      </Picker>
      {/* Price */}
      <Text style={styles.price}>
        from ${product.price}{' '}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>${product.oldPrice}</Text>
        )}
      </Text>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Button */}
      <Button
        text="Add to Cart"
        onPress={() => {
          console.warn('Add to Cart');
        }}
      />
      <Button
        text="Buy Now"
        onPress={() => {
          console.warn('Buy Now');
        }}
      />
    </View>
  );
};

export default ProductScreen;
