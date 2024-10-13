import { Dimensions, PixelRatio, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import packageJson from '../../package.json';

export const mockUpWidth = 375;
const mockUpHeight = 812;

const { width, height } = Dimensions.get('window');

export const isIphoneX = () => {
  const dimension = Dimensions.get('window');

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    (dimension.height === 812 ||
      dimension.width === 812 ||
      dimension.height === 896 ||
      dimension.width === 896)
  );
};

export const scaledWidth = (widthPx: number) => {
  const percentage = (widthPx / mockUpWidth) * 100;

  return widthPercentageToDP(percentage);
};

export const scaledHeight = (heightPx: number) => {
  const percentage =
    ((isIphoneX() ? heightPx + 20 : heightPx) / mockUpHeight) * 100;

  return heightPercentageToDP(percentage);
};

const widthPercentageToDP = (widthPercent: number) => {
  const screenWidth = width;
  // Convert string input to decimal number
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
};
const heightPercentageToDP = (heightPercent: number) => {
  const screenHeight = height;
  // Convert string input to decimal number
  return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
};

export const deviceConstants = {
  systemName: DeviceInfo.getSystemName(),
  systemVersion: DeviceInfo.getSystemVersion(),
  brand: DeviceInfo.getBrand(),
  uniqueId: DeviceInfo.getUniqueId(),
  mobileVersion: packageJson.version,
  buildVersion: packageJson.version,
};
