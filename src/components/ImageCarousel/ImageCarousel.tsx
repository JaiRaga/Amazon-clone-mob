import {
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  ViewToken,
  FlatListProps,
} from 'react-native';
import React, {useCallback, useState} from 'react';

import styles from './styles';

const ImageCarousel = ({images}: {images: string[]}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {width} = useWindowDimensions();

  const onFlatListImageSwipe = useCallback(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0);
      }
    },
    [],
  );

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item, index}) => (
          <Image
            style={[styles.image, {width: width - 40}]}
            source={{uri: item}}
          />
        )}
        keyExtractor={(item, index) => `${item}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 20}
        snapToAlignment={'center'}
        decelerationRate="fast"
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatListImageSwipe}
      />
      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {backgroundColor: index === activeIndex ? '#aaa' : '#eee'},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
