import {View, Image, Dimensions, ImageSourcePropType} from 'react-native';

const {width} = Dimensions.get('window');

interface Props {
  image: ImageSourcePropType;
}

export const GalleryImageItem = ({image}: Props) => {
  return (
    <View style={{flex: 1}}>
      <Image
        style={{flex: 1, width: width - 50, resizeMode: 'contain'}}
        source={image}
      />
    </View>
  );
};
