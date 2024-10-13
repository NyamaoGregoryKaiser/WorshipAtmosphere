import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { TestimonyType } from '../../types/types';
import { StyleSheet } from 'react-native';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale, lineHeight } from '../../functions/font';
import Card from '../../common/Card';
import { screenNames } from '../../screens/screenNames';
import HTMLRenderer from '../../common/HTMLRenderer';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const TestimonyCard = ({
  testimony,
  navigateToScreen,
}: {
  testimony: TestimonyType;
  navigateToScreen: (screenName: string, testimony: TestimonyType) => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigateToScreen(screenNames.SINGLE_TESTIMONY, testimony)}>
      <Card containerStyle={styles.container}>
        <Text style={styles.title}>{testimony.titles}</Text>

        <HTMLRenderer
          source={{
            html: testimony.main_gist,
          }}
          baseStyle={styles.description}
          defaultTextProps={{
            numberOfLines: 10,
          }}
        />

        <View style={styles.separator} />
        <Text style={styles.name}>{testimony.names}</Text>
        <Text style={styles.date}>
          {new Date(testimony.ditto).toDateString()}
        </Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FFFD',
    paddingHorizontal: scaledWidth(20),
    paddingTop: scaledHeight(14),
    paddingBottom: scaledHeight(17),
    borderRadius: 6.62,
  },
  title: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    fontSize: fontScale(16),
    marginBottom: 4,
  },
  description: {
    color: appColors.black,
    fontSize: fontScale(11),
    fontFamily: DMRegular,
    lineHeight: lineHeight,
  },
  separator: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#002F7280',
    marginTop: scaledHeight(30),
    marginBottom: scaledHeight(9),
  },
  name: {
    color: appColors.black,
    fontFamily: DMBold,
    fontSize: fontScale(13),
    textTransform: 'capitalize',
  },
  date: {
    fontFamily: DMRegular,
    color: appColors.primaryColor,
    fontSize: fontScale(8),
  },
});

export default TestimonyCard;
