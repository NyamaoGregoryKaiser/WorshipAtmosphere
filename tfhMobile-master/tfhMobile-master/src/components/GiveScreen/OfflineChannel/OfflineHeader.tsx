import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { DMBold } from '../../../theme/fonts';
import appColors from '../../../theme/colors';
import { fontScale } from '../../../functions/font';
import { scaledHeight, scaledWidth } from '../../../functions/utils';

const OfflineHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Offline Channels</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaledWidth(10),
    justifyContent: 'center',
    // marginTop: 54,
    paddingHorizontal: scaledWidth(24),
    marginBottom: scaledHeight(24),
  },
  text: {
    fontFamily: DMBold,
    fontSize: fontScale(16),
    color: appColors.primaryColor,
  },
  line: {
    backgroundColor: appColors.primaryColor,
    height: 1,
    flex: 1,
  },
});

export default OfflineHeader;
