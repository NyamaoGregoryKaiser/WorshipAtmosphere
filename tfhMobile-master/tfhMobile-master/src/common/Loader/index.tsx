import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import appColors from '../../theme/colors';

function Loader({
  size = 'small',
  color = appColors.secondaryColor,
  ...rest
}: ActivityIndicatorProps) {
  return <ActivityIndicator color={color} size={size} {...rest} />;
}

export default Loader;
