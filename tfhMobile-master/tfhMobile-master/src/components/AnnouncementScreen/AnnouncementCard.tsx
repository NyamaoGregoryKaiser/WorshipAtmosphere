import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { AnnouncementType } from '../../types/types';
import appColors from '../../theme/colors';
import { DMBold, DMRegular } from '../../theme/fonts';
import { fontScale, lineHeightSmall } from '../../functions/font';
import { screenNames } from '../../screens/screenNames';
import HTMLRenderer from '../../common/HTMLRenderer';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const AnnouncementCard = ({
  navigateToScreen,
  announcement,
}: {
  navigateToScreen: (
    screenName: string,
    announcement: AnnouncementType,
  ) => void;
  announcement: AnnouncementType;
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigateToScreen(screenNames.SINGLE_ANNOUNCEMENT, announcement)
      }
      style={styles.container}>
      <Image
        source={{
          uri: announcement.image,
        }}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{announcement.title}</Text>
        <HTMLRenderer
          source={{
            html: announcement.details,
          }}
          baseStyle={{
            color: '#888888',
            fontSize: fontScale(10),
            fontFamily: DMRegular,
          }}
          defaultTextProps={{
            numberOfLines: 3,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaledHeight(11),
  },
  image: {
    width: scaledWidth(87),
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 6,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    color: appColors.black,
    fontFamily: DMBold,
    // marginBottom: 5,
    fontSize: fontScale(13),
  },
  description: {
    color: '#888888',
    fontSize: fontScale(10),
    fontFamily: DMRegular,
    lineHeight: lineHeightSmall,
  },
});

export default AnnouncementCard;
