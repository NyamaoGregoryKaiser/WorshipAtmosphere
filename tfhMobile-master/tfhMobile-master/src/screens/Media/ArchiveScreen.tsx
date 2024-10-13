import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';
import archiveChannels from '../../components/MediaScreen/archiveChannels';
import ArchiveCard from '../../components/MediaScreen/ArchiveCard';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const ArchiveScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['ARCHIVE']
>) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Archive</Text>
      <Text style={styles.subtitle}>
        View, download and listen to our old messages that have been kept and
        preserved for you.
      </Text>
      <View
        style={{
          gap: 21,
        }}>
        {archiveChannels.map(channel => (
          <ArchiveCard channel={channel} key={channel.link} />
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

export default ArchiveScreen;
