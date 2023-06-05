import {useContext, useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View, Animated} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {GalleryImageItem, GradientBackground} from '../components';
import {slides} from '../constants';
import {GradientContext} from '../context';
import {getImageColors} from '../helpers';
import {useFade} from '../hooks';

const {width, height} = Dimensions.get('window');

export const HomeScreen = () => {
  const {opacity, fadeIn} = useFade();
  const [index, setIndex] = useState<number>(0);
  const {setMainColors} = useContext(GradientContext);

  const getSlideColors = async (index: number) => {
    const slide = slides[index];
    const [primary, secondary] = await getImageColors(slide.image as string);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    getSlideColors(index);
    setTimeout(() => {
      fadeIn();
    }, 500);
    return () => {
      opacity.setValue(0);
    };
  }, [index]);

  return (
    <GradientBackground>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={slides}
            renderItem={({item}) => <GalleryImageItem slide={item} />}
            sliderWidth={width}
            inactiveSlideOpacity={0.1}
            itemWidth={width - 100}
            onSnapToItem={index => {
              setIndex(index);
            }}
          />
        </View>
        <Animated.Text style={{...styles.description, opacity}}>
          {slides[index].text}
        </Animated.Text>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: height / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
    width,
    paddingHorizontal: 25,
  },
});
