import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const basePhoneWidth = 375;

export const scale = (size: number) => (SCREEN_WIDTH / basePhoneWidth) * size;

export const Typography = {
  fontSizes: {
    xs: scale(10),
    sm: scale(12),
    base: scale(14),
    lg: scale(16),
    xl: scale(18),
    '2xl': scale(20),
    '3xl': scale(24),
    '4xl': scale(32),
  },
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
    extraBold: '800',
  },
  fontFamily: {
    regular: 'System',
    bold: 'System-Bold',
  },
};
