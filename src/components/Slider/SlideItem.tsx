import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    Easing,
  } from 'react-native';
  import React from 'react';
  
  const {width, height} = Dimensions.get('screen');
  
  const SlideItem = ({item}: any) => {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={item.image == '' ? '' : item.image}
            resizeMode="contain"
          />
        </View>
  
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    );
  };
  
  export default SlideItem;
  
  const styles = StyleSheet.create({
    container: {
      width: width,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      flex: 0.7,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: 250,
      // backgroundColor: 'red',
    },
    content: {
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      // backgroundColor: 'green',
    },
    title: {
      color: 'white',
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      maxWidth: width * 0.8,
  
      fontFamily: 'Jura-Bold',
    },
  });