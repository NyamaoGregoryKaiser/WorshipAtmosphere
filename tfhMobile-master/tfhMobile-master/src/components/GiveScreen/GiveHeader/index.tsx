import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import appColors from '../../../theme/colors';
import { DMBold } from '../../../theme/fonts';
import GiftIcon from '../../../assets/icons/svgs/give/gift.svg';
import { fontScale } from '../../../functions/font';
import { scaledHeight } from '../../../functions/utils';

const GiveHeader = () => {
  return (
    <View style={styles.container}>
      <GiftIcon />
      <Text style={styles.mainText}>Giving Channels</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: scaledHeight(9),
    alignItems: 'center',
    marginTop: scaledHeight(79),
    marginBottom: scaledHeight(39),
  },
  mainText: {
    color: appColors.primaryColor,
    fontFamily: DMBold,
    fontSize: fontScale(24),
    textAlign: 'center',
  },
});

export default GiveHeader;
