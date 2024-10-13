import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Card from '../../common/Card';
import { StyleSheet } from 'react-native';
import ArrowRightIcon from '../../assets/icons/svgs/about/arrow-right.svg';
import { DMBold } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { scaledHeight, scaledWidth } from '../../functions/utils';
import { fontScale } from '../../functions/font';

interface Props {
  title: string;
  navigateToScreen: (screenName: string) => void;
  screenName: string;
}

const AboutCard = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => props.navigateToScreen(props.screenName)}>
      <Card containerStyle={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <ArrowRightIcon />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: scaledHeight(20),
    paddingLeft: scaledWidth(46),
    paddingRight: scaledWidth(50),
    borderRadius: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    fontSize: fontScale(16),
    textAlign: 'center',
  },
});

export default AboutCard;
