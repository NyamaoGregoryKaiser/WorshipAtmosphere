import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { PastorType } from './pastorsData';
import { DMBold, DMMediumItalic, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import ChevronRightIcon from '../../assets/icons/svgs/pastors/chevron-right.svg';
import { screenNames } from '../../screens/screenNames';
import { fontScale, lineHeight, lineHeightSmall } from '../../functions/font';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const PastorCard = ({
  navigateToScreen,
  pastor,
}: {
  pastor: PastorType;
  navigateToScreen: (screenName: string, pastor: PastorType) => void;
}) => {
  return (
    <View style={styles.container}>
      <Image source={pastor.imageLink} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{pastor.name}</Text>
        <Text style={styles.position}>{pastor.position}</Text>
        <Text style={styles.description} numberOfLines={4}>
          {pastor.description}
        </Text>
        <TouchableOpacity
          style={styles.readMoreContainer}
          onPress={() => navigateToScreen(screenNames.SINGLE_PASTOR, pastor)}>
          <Text style={styles.readMoreText}>Read More </Text>
          <ChevronRightIcon height={'80%'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: scaledHeight(11),
    alignItems: 'center',
  },
  image: {
    width: scaledWidth(87),
    height: '100%',
    borderRadius: 6,
    resizeMode: 'cover',
  },
  name: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    fontSize: fontScale(13),
    marginBottom: scaledHeight(5),
  },
  position: {
    color: appColors.secondaryColor,
    fontSize: fontScale(7),
    marginBottom: scaledHeight(5),
    fontFamily: DMMediumItalic,
    fontStyle: 'italic',
  },
  description: {
    marginBottom: scaledHeight(10),
    color: appColors.black,
    fontSize: fontScale(8),
    fontFamily: DMRegular,
    lineHeight: lineHeightSmall,
  },
  readMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMoreText: {
    fontFamily: DMBold,
    fontSize: fontScale(10),
    color: appColors.secondaryColor,
  },
});

export default PastorCard;
