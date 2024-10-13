import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';
import streamingPlatforms from '../../components/MediaScreen/streamingPlatforms';
import SteamingPlatformCard from '../../components/MediaScreen/SteamingPlatformCard';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const StreamingPlatformsScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['STREAMING_PLATFORMS']
>) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Where do you want to stream from?</Text>
      <Text style={styles.subtitle}>
        Select the channel you want to stream from.
      </Text>
      <View
        style={{
          gap: 21,
        }}>
        {streamingPlatforms.map(platform => (
          <SteamingPlatformCard platform={platform} key={platform.link} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: scaledWidth(26),
    paddingVertical: scaledHeight(35),
  },
  title: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    marginBottom: scaledHeight(10),
    fontSize: fontScale(24),
  },
  subtitle: {
    fontFamily: DMRegular,
    color: appColors.black,
    fontSize: fontScale(11),
    marginBottom: scaledHeight(25),
  },
});

export default StreamingPlatformsScreen;
