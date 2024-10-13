import { View, Text, StyleSheet, ViewProps } from 'react-native';
import React from 'react';
import appColors from '../../theme/colors';
import { DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import { scaledHeight } from '../../functions/utils';

interface Props {
  mainText: string;
  subText?: string;
}

const SectionTitle = ({ mainText, subText, ...rest }: Props & ViewProps) => {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.mainText}>{mainText}</Text>
      <Text style={styles.subText}>{subText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scaledHeight(5),
  },
  mainText: {
    textAlign: 'left',
    fontSize: fontScale(10),
    color: appColors.black,
    fontFamily: DMRegular,
  },
  subText: {
    textAlign: 'right',
    fontSize: fontScale(10),
    color: appColors.black,
    fontFamily: DMRegular,
  },
});

export default SectionTitle;
