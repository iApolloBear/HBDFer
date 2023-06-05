import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string): Promise<string[]> => {
  const colors = await ImageColors.getColors(uri);

  if (colors.platform === 'android') return [colors.dominant!, colors.average!];
  if (colors.platform === 'ios') return [colors.primary, colors.secondary];
  return [];
};
