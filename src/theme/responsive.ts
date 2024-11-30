import {PixelRatio} from 'react-native';

export const responsiveHeight = (h: number) => {
  return PixelRatio.getPixelSizeForLayoutSize(h);
};

export const responsiveWidth = (w: number) => {
  return PixelRatio.getPixelSizeForLayoutSize(w);
};

export const responsiveFontSize = (f: number) => {
  const scale = PixelRatio.getFontScale();
  return f / scale;
};
