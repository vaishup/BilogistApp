import React, {useState, useRef} from 'react';
import {Text, VStack} from '@gluestack-ui/themed';
import {Animated, Dimensions, FlatList} from 'react-native';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

const {width, height} = Dimensions.get('window');

const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const Slides = [
    {
      id: 1,
      image: require('../../assets/logo.png'),
      title: 'Trade',
    },
    {
      id: 2,
      image: require('../../assets/logo.png'),
      title: `Safe &${'\n'}Secure`,
    },
    {
      id: 3,
      image: require('../../assets/logo.png'),
      title: 'Assets',
    },
  ];
  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}: any) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 20,
  }).current;

  return (
    <VStack space="md">
      <FlatList
        style={{width: width, height: '80%'}}
        data={Slides}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={Slides} scrollX={scrollX} index={index} />
    </VStack>
  );
};
export default Slider;