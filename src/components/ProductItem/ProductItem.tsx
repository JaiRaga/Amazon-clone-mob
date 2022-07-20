import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const ProductItem = () => {
  return (
    <View style={styles.root}>
      <View style={styles.innerContainer}>
        {/* left container */}
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
          }}
          style={styles.image}
        />
        {/* right container */}
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB
          </Text>
          {/* Ratings */}
          <View style={styles.ratingsContainer}>
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color="#e47911"
            />
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color="#e47911"
            />
            <FontAwesome
              style={styles.star}
              name="star-half-full"
              size={18}
              color="#e47911"
            />
            <FontAwesome
              style={styles.star}
              name="star-o"
              size={18}
              color="#e47911"
            />
            <FontAwesome
              style={styles.star}
              name="star-o"
              size={18}
              color="#e47911"
            />
            <Text style={styles.ratingsCount}>20,000</Text>
          </View>
          <Text style={styles.price}>
            from $17.99 <Text style={styles.oldPrice}>$19.99</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
