import {StyleSheet, Animated, View, Dimensions} from 'react-native';
import React from 'react';
import {colors} from '../../styles/color';

const {width} = Dimensions.get('screen');

const Pagination = ({data, scrollX, index}: any) => {
  return (
    <View style={styles.container}>
      {data.map((_: any, idx: number) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#ccc', '#316CF4', '#ccc'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dot, {width: dotWidth, backgroundColor}]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // bottom: 25,

    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: '#000',
  },
  //
});