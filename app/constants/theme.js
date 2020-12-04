import { Dimensions, Platform } from 'react-native';

import { colors } from './colors';

const { width, height } = Dimensions.get('window');

export const isIos = Platform.OS === 'ios';

const getFont = (n) => (isIos ? fonts.ios[n] : fonts.android[n]);

const fonts = {
  ios: ['Proxima-Nova-Bold', 'Proxima-Nova-Sbold', 'Proxima-Nova-Reg'],
  android: ['Montserrat-Bold', 'Montserrat-SemiBold', 'Montserrat-Regular'],
};

export default {
  colors,
  size: {
    s: 10,
    m: 12,
    l: 14,
    l2: 16,
    xl: 18,
    title1: 22,
    title2: 30,
    heading: 50,
  },
  space: {
    n: 0,
    s1: 4,
    s2: 8,
    m1: 12,
    m2: 18,
    l1: 24,
    l2: 32,
    xl: 40,
  },
  radii: {
    n: 0,
    s1: 4,
    s2: 10,
    m: 24,
    l: 35,
  },

  getFont,
  width,
  height,
};
