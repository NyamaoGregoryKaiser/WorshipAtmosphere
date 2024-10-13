import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import appColors from '../../theme/colors';

function SectionLoader({ size = 'large', ...rest }: ActivityIndicatorProps) {
  return (
    <ActivityIndicator
      style={{ alignSelf: 'flex-start' }}
      color={appColors.secondaryColor}
      size={size}
      {...rest}
    />
  );
}

export default SectionLoader;
