import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import product from '../../data/product';

import styles from './styles';
import QuantitySelector from '../../components/QuantitySelector';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
  console.log(selectedOption)
  return (
    <View>
      <Text style={styles.title}>{product.title}</Text>

      {/* Image Carousel */}

      {/* Option Selector */}
      <Picker selectedValue={selectedOption} onValueChange={setSelectedOption}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} />
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
      <QuantitySelector />

      {/* Button */}
    </View>
  );
};

export default ProductScreen;
