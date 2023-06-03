import {Dimensions, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  eight,
  eleven,
  five,
  four,
  nine,
  one,
  seven,
  six,
  ten,
  thirteen,
  three,
  twelve,
  two,
} from '../assets';
import {GalleryImageItem} from '../components';

const {width, height} = Dimensions.get('window');

export const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={styles.carouselContainer}>
        <Carousel
          data={[
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten,
            eleven,
            twelve,
            thirteen,
          ]}
          renderItem={({item}) => <GalleryImageItem image={item} />}
          sliderWidth={width}
          inactiveSlideOpacity={0.7}
          itemWidth={width - 100}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: height / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
