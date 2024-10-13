import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import { useAppSelector } from '../../store/hooks';
import SectionTitle from '../../common/SectionTitle';
import SectionLoader from '../../common/Loader/SectionLoader';
import Card from '../../common/Card';
import { DMBold, DMRegular } from '../../theme/fonts';
import appColors from '../../theme/colors';
import { fontScale } from '../../functions/font';
import PlayIcon from '../../assets/icons/svgs/home/play.svg';
import { getYoutubeLink } from '../../functions/stringManipulations';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const LatestMessage = () => {
  const { videos, loading } = useAppSelector(state => state.youtubeVideos);

  return (
    <>
      {loading ? (
        <SectionLoader
          style={{
            alignSelf: 'flex-start',
            marginTop: 30,
            marginHorizontal: 16,
          }}
        />
      ) : videos && videos.length > 0 ? (
        <>
          <View style={styles.container}>
            <SectionTitle mainText="Latest Service" />
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  getYoutubeLink(videos[0].snippet.resourceId.videoId),
                )
              }>
              <Card containerStyle={styles.contentContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri: videos[0].snippet.thumbnails.standard.url,
                    }}
                    style={styles.image}
                  />
                  <View style={styles.imageOverlay} />
                  <View style={styles.playIconContainer}>
                    <PlayIcon />
                  </View>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{videos[0].snippet.title}</Text>
                  <Text style={styles.subtitle}>
                    {new Date(videos[0].snippet.publishedAt).toDateString()}
                  </Text>
                </View>
              </Card>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text style={styles.notFoundText}>No video found</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaledWidth(16),
    marginTop: scaledHeight(30),
  },

  contentContainer: {
    padding: 0,
    flexDirection: 'column',
    gap: 0,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    height: scaledHeight(163),
    width: '100%',
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#00000010',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  playIconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: appColors.white,
    paddingVertical: scaledHeight(9),
    paddingHorizontal: scaledWidth(9),
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    fontSize: fontScale(15),
    marginBottom: scaledHeight(3),
    textTransform: 'capitalize',
  },
  subtitle: {
    fontFamily: DMRegular,
    color: appColors.black,
    fontSize: fontScale(9),
  },
  notFoundText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.black,
  },
});

export default LatestMessage;
