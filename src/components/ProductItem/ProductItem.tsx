import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({item}: ProductItemProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.innerContainer}>
        {/* left container */}
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.image}
        />
        {/* right container */}
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          {/* Ratings */}
          <View style={styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((ele, ind) => (
              <FontAwesome
                key={`${item.id}-${ind}`}
                style={styles.star}
                name={ind < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color="#e47911"
              />
            ))}
            {/*
            <FontAwesome
              style={styles.star}
              name="star-half-full"
              size={18}
              color="#e47911"
            />
          */}
            <Text style={styles.ratingsCount}>{item.ratings}</Text>
          </View>
          <Text style={styles.price}>
            from ${item.price}{' '}
            {item.oldPrice && (
              <Text style={styles.oldPrice}>${item.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
