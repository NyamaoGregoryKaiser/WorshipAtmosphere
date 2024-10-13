import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { DMBold, DMRegular } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import { fontScale, lineHeightSmall } from '../../../functions/font';
import { scaledHeight, scaledWidth } from '../../../functions/utils';

const IntroHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>See us online</Text>
      <Text style={styles.subText}>
        We're committed to helping you grow spiritually
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: scaledHeight(4),
    paddingHorizontal: scaledWidth(15),
    marginTop: scaledHeight(5),
    marginBottom: scaledHeight(31),
  },
  mainText: {
    fontSize: fontScale(24),
    fontFamily: DMBold,
    color: appColors.primaryColor,
  },
  subText: {
    fontFamily: DMRegular,
    color: appColors.primaryColor,
    fontSize: fontScale(11),
    lineHeight: lineHeightSmall,
  },
});

export default IntroHeader;
