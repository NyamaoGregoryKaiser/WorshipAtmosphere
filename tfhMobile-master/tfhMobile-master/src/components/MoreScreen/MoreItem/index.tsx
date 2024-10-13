import { Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { DMRegular } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import AuthenticationItem from './AuthenticationItem';
import { fontScale } from '../../../functions/font';
import { scaledHeight, scaledWidth } from '../../../functions/utils';

interface Props {
  title: string;
  icon: React.ReactNode;
  type?: 'normal' | 'authentication';
  navigateToScreen: (screenName: string) => void;
  screenName: string;
}

const MoreItem = ({
  title,
  icon,
  type = 'normal',
  navigateToScreen,
  screenName,
  ...rest
}: Props & TouchableOpacityProps) => {
  return (
    <>
      {type === 'normal' && (
        <TouchableOpacity
          style={styles.container}
          {...rest}
          onPress={() => navigateToScreen(screenName)}>
          {icon}
          <Text style={styles.titleText}>{title}</Text>
        </TouchableOpacity>
      )}

      {type === 'authentication' && (
        <AuthenticationItem
          navigateToScreen={navigateToScreen}
          screenName={screenName}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaledWidth(20),
    paddingHorizontal: scaledWidth(40),
    paddingVertical: scaledHeight(20),
  },
  titleText: {
    fontFamily: DMRegular,
    fontSize: fontScale(13),
    color: appColors.primaryColor,
  },
});

export default MoreItem;
