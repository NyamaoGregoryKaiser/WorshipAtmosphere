import { View, Text, Image } from 'react-native';
import React from 'react';
import { LocationType } from '../HomeScreen/ChurchLocation/churchLocations';
import Card from '../../common/Card';
import { StyleSheet } from 'react-native';
import appColors from '../../theme/colors';
import { DMBold, DMRegular } from '../../theme/fonts';
import { fontScale, lineHeightSmall } from '../../functions/font';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const LocationCard = ({ location }: { location: LocationType }) => {
  return (
    <Card containerStyle={styles.container}>
      <Image source={location.imageLink} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{location.name}</Text>
        <Text style={styles.address}>{location.address}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: scaledHeight(13),
    paddingHorizontal: scaledWidth(16),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaledWidth(10),
  },
  image: {
    width: scaledWidth(110),
    height: scaledHeight(123),
    resizeMode: 'cover',
    borderRadius: 6,
  },
  name: {
    textTransform: 'uppercase',
    color: appColors.primaryColor,
    fontFamily: DMBold,
    marginBottom: scaledHeight(6),
    fontSize: fontScale(16),
  },
  address: {
    color: appColors.black,
    fontFamily: DMRegular,
    fontSize: fontScale(10),
    lineHeight: lineHeightSmall,
  },
});

export default LocationCard;
