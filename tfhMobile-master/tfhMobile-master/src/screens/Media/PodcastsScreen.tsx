import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import appColors from '../../theme/colors';
import { DMBold, DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import Card from '../../common/Card';
import podcastLinks from '../../components/MediaScreen/podcastLinks';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const PodcastsScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['PODCASTS']
>) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Where do you want to listen from?</Text>
      <Text style={styles.subtitle}>
        Select the channel you want to listen from.
      </Text>
      <View style={styles.contentContainer}>
        {podcastLinks.map(podcast => (
          <TouchableOpacity
            key={podcast.link}
            onPress={() => Linking.openURL(podcast.link)}>
            <Card containerStyle={styles.card}>{podcast.icon}</Card>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaledWidth(31),
    paddingVertical: scaledHeight(18),
    flexGrow: 1,
    backgroundColor: appColors.white,
  },
  title: {
    fontFamily: DMBold,
    fontSize: fontScale(24),
    marginBottom: scaledHeight(2),
    color: appColors.primaryColor,
  },
  subtitle: {
    color: appColors.black,
    fontFamily: DMRegular,
    fontSize: fontScale(11),
  },
  contentContainer: {
    gap: scaledHeight(21),
    marginTop: scaledHeight(47),
  },
  card: {
    paddingHorizontal: scaledWidth(21),
    paddingVertical: scaledHeight(21),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PodcastsScreen;
