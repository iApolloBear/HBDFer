import {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {GalleryImageItem, GradientBackground} from '../components';
import {slides} from '../constants';
import {GradientContext} from '../context';
import {getImageColors} from '../helpers';

const {width, height} = Dimensions.get('window');

export const HomeScreen = () => {
  const [index, setIndex] = useState<number>(0);
  const {setMainColors} = useContext(GradientContext);

  const getSlideColors = async (index: number) => {
    const slide = slides[index];
    const [primary, secondary] = await getImageColors(slide);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    getSlideColors(index);
  }, [index]);

  return (
    <GradientBackground>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={slides}
            renderItem={({item}) => <GalleryImageItem image={item} />}
            sliderWidth={width}
            inactiveSlideOpacity={0.7}
            itemWidth={width - 100}
            onSnapToItem={index => {
              setIndex(index);
            }}
          />
        </View>
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
});
