import { Dimensions } from 'react-native';
import { mockUpWidth } from './utils';

const { width } = Dimensions.get('window');

const scaleToUse = (size: number) => (width / mockUpWidth) * size;

export const fontScale = (size: number, factor: number = 1) =>
  size + (scaleToUse(size + 3) - size) * factor;

// export const fontScale = (size: number) => {
//   return size + 5;
// };

export const lineHeight = 30;
export const lineHeightSmall = 20;
