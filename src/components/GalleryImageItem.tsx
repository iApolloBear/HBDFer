import {View, Image, Dimensions} from 'react-native';
import {Slide} from '../interfaces';

const {width} = Dimensions.get('window');

interface Props {
  slide: Slide;
}

export const GalleryImageItem = ({slide: {image}}: Props) => {
  return (
    <View style={{flex: 1}}>
      <Image
        style={{flex: 1, width: width - 50, resizeMode: 'contain'}}
        source={image}
      />
    </View>
  );
};
