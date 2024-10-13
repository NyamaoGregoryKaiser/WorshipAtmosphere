import { StyleSheet, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { PlatformType } from './streamingPlatforms';
import Card from '../../common/Card';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const SteamingPlatformCard = ({ platform }: { platform: PlatformType }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(platform.link)}>
      <Card containerStyle={styles.container}>{platform.image}</Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: scaledWidth(17),
    paddingVertical: scaledHeight(17),
    height: scaledHeight(79),
    justifyContent: 'center',
  },
});

export default SteamingPlatformCard;
