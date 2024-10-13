import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
  RefreshControl,
} from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import appColors from '../../theme/colors';
import { DMBold, DMRegular } from '../../theme/fonts';
import { fontScale } from '../../functions/font';
import SectionLoader from '../../common/Loader/SectionLoader';
import { getYoutubeLink } from '../../functions/stringManipulations';
import Card from '../../common/Card';
import PlayIcon from '../../assets/icons/svgs/home/play.svg';
import axios from 'axios';
import { sendCatchFeedback } from '../../functions/feedback';
import {
  YOUTUBE_API_KEY,
  YOUTUBE_UPLOAD_KEY,
} from '../../functions/environmentVariables';
import YoutubePagination from '../../common/YoutubePagination';
import { YoutubeVideoType } from '../../types/types';
import { scaledHeight, scaledWidth } from '../../functions/utils';

const RecentMessagesScreen = ({}: NativeStackScreenProps<
  any,
  screenNamesTypes['RECENT_MESSAGES']
>) => {
  const [loading, setLoading] = useState(true);
  const [pageToken, setPageToken] = useState('');
  const [prevPageToken, setPrevPageToken] = useState('');
  const [nextPageToken, setNextPageToken] = useState('');
  const [videos, setVideos] = useState<YoutubeVideoType[] | undefined>(
    undefined,
  );
  const [refreshing, setRefreshing] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const getYoutubeChannelVideos = async () => {
    setLoading(true);
    try {
      let response;
      if (pageToken) {
        response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&part=snippet&playlistId=${YOUTUBE_UPLOAD_KEY}&maxResults=10&pageToken=${pageToken}`,
        );
      } else {
        response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&part=snippet&playlistId=${YOUTUBE_UPLOAD_KEY}&maxResults=10`,
        );
      }
      setVideos(response.data.items);
      setNextPageToken(response.data.nextPageToken);
      setPrevPageToken(response.data.prevPageToken);
    } catch (error) {
      console.log(error);
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getYoutubeChannelVideos();
  }, [pageToken]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    getYoutubeChannelVideos();
    setRefreshing(false);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {loading ? (
        <SectionLoader
          style={{
            alignSelf: 'center',
            marginTop: scaledHeight(18),
          }}
        />
      ) : videos && videos.length > 0 ? (
        <>
          {videos.slice(0, 10).map(video => (
            <TouchableOpacity
              key={video.id}
              onPress={() =>
                Linking.openURL(
                  getYoutubeLink(video.snippet.resourceId.videoId),
                )
              }>
              <Card containerStyle={styles.contentContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri:
                        video.snippet.thumbnails.standard?.url ||
                        video.snippet.thumbnails.default?.url,
                    }}
                    style={styles.image}
                  />
                  <View style={styles.imageOverlay} />
                  <View style={styles.playIconContainer}>
                    <PlayIcon />
                  </View>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.title} numberOfLines={2}>
                    {video.snippet.title}
                  </Text>
                  <Text style={styles.description} numberOfLines={3}>
                    {video.snippet.description}
                  </Text>
                  <Text style={styles.subtitle}>
                    {new Date(video.snippet.publishedAt).toDateString()}
                  </Text>
                </View>
              </Card>
            </TouchableOpacity>
          ))}
          <YoutubePagination
            page={page}
            setPage={setPage}
            nextPageToken={nextPageToken}
            propsSetPageToken={setPageToken}
            prevPageToken={prevPageToken}
          />
        </>
      ) : (
        <Text style={styles.notFoundText}>No video found</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaledWidth(25),
    paddingVertical: scaledHeight(18),
    gap: scaledHeight(20),
    flexGrow: 1,
    backgroundColor: appColors.white,
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
    height: scaledHeight(130.99),
    width: '100%',
    resizeMode: 'cover',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0000004D',
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
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
    paddingHorizontal: scaledWidth(12),
    flex: 1,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  title: {
    fontFamily: DMBold,
    color: appColors.primaryColor,
    fontSize: fontScale(15),
    marginBottom: scaledHeight(3),
    textTransform: 'capitalize',
  },
  description: {
    fontFamily: DMRegular,
    color: appColors.primaryColor,
    fontSize: fontScale(10),
    marginBottom: scaledHeight(3),
    textTransform: 'capitalize',
  },
  subtitle: {
    fontFamily: DMRegular,
    color: appColors.black,
    fontSize: fontScale(8),
  },
  notFoundText: {
    fontFamily: DMRegular,
    fontSize: fontScale(11),
    color: appColors.black,
    marginBottom: scaledHeight(20),
  },
});

export default RecentMessagesScreen;
