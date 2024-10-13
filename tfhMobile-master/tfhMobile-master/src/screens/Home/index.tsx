import { RefreshControl, ScrollView, View } from 'react-native';
import React from 'react';
import LogoHeader from '../../components/HomeScreen/LogoHeader';
import SignupForm from '../../components/HomeScreen/SignupForm';
import DayDevotional from '../../components/HomeScreen/DayDevotional';
import ChurchLocation from '../../components/HomeScreen/ChurchLocation';
import GiveCard from '../../components/HomeScreen/GiveCard';
import Announcements from '../../components/HomeScreen/Announcements';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenNamesTypes } from '../screenNamesTypes';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setTodayDevotional,
  setTodayDevotionalLoading,
} from '../../store/slices/todayDevotional';
import {
  setAnnouncementLoading,
  setAnnouncements,
} from '../../store/slices/announcement';
import { appAxios } from '../../api/axios';
import { sendCatchFeedback } from '../../functions/feedback';
import { setVideoLoading, setVideos } from '../../store/slices/youtubeVideos';
import axios from 'axios';
import {
  YOUTUBE_API_KEY,
  YOUTUBE_UPLOAD_KEY,
} from '../../functions/environmentVariables';
import LatestMessage from '../../components/HomeScreen/LatestMessage';
import RecentMessages from '../../components/HomeScreen/RecentMessages';

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<any, screenNamesTypes['HOME']>) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useAppDispatch();

  const getAnnouncements = async () => {
    dispatch(setAnnouncementLoading(true));

    try {
      const announcementResponse = await appAxios.get(`/announcement?page=1`);
      dispatch(setAnnouncements(announcementResponse.data.data));
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      dispatch(setAnnouncementLoading(false));
    }
  };

  const getTodayDevotional = async () => {
    dispatch(setTodayDevotionalLoading(true));
    try {
      const dayDevotionalResponse = await appAxios.get('/devotional/today');
      dispatch(setTodayDevotional(dayDevotionalResponse.data.devotional));
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      dispatch(setTodayDevotionalLoading(false));
    }
  };

  const getYoutubeChannelVideos = async () => {
    dispatch(setVideoLoading(true));
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&part=snippet&playlistId=${YOUTUBE_UPLOAD_KEY}&maxResults=10`,
      );
      dispatch(
        setVideos({
          videos: response.data.items,
          nextPageToken: response.data.nextPageToken,
          prevPageToken: response.data.prevPageToken,
        }),
      );
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      dispatch(setVideoLoading(false));
    }
  };

  const getData = async () => {
    getAnnouncements();
    getTodayDevotional();
    getYoutubeChannelVideos();
  };

  React.useEffect(() => {
    getData();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    getData();
    setRefreshing(false);
  }, []);

  const navigateToScreen = (screenName: string, objectToTransfer?: any) => {
    navigation.navigate(screenName, objectToTransfer);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fff' }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <LogoHeader navigateToScreen={navigateToScreen} />
      <SignupForm navigateToScreen={navigateToScreen} />
      <LatestMessage />
      <DayDevotional navigateToScreen={navigateToScreen} />
      <RecentMessages />
      <ChurchLocation navigateToScreen={navigateToScreen} />
      <GiveCard navigateToScreen={navigateToScreen} />
      <Announcements navigateToScreen={navigateToScreen} />
    </ScrollView>
  );
};

export default HomeScreen;
