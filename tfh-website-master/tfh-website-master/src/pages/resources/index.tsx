import WorshipExperienceSection from '@/components/homepage/WorshipExperienceSection';
import AppLayout from '@/components/layout/AppLayout';
import DevotionalSection from '@/components/resourcesPage/DevotionalSection';
import DownloadAppSection from '@/components/resourcesPage/DownloadAppSection';
import Header from '@/components/resourcesPage/Header';
import LivestreamChannelsSection from '@/components/resourcesPage/LivestreamChannelsSection';
import PodcastSection from '@/components/resourcesPage/PodcastSection';
import TestimoniesSection from '@/components/resourcesPage/TestimoniesSection';
import { YOUTUBE_API_KEY, YOUTUBE_UPLOAD_KEY } from '@/functions/environmentVariables';
import { sendCatchFeedback } from '@/functions/feedback';
import { useAppDispatch } from '@/store/hooks';
import { setVideoLoading, setVideos } from '@/store/slices/youtubeVideos';
import axios from 'axios';
import React, { useEffect } from 'react';

const ResourcesPage = () => {
  const dispatch = useAppDispatch();
  const getYoutubeChannelVideos = async () => {
    dispatch(setVideoLoading(true));
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&part=snippet&playlistId=${YOUTUBE_UPLOAD_KEY}&maxResults=10`
      );
      dispatch(
        setVideos({
          videos: response.data.items,
          nextPageToken: response.data.nextPageToken,
          prevPageToken: response.data.prevPageToken,
        })
      );
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      dispatch(setVideoLoading(false));
    }
  };

  useEffect(() => {
    getYoutubeChannelVideos();
  }, []);
  return (
    <AppLayout>
      <Header />
      <DevotionalSection />
      <PodcastSection />
      <LivestreamChannelsSection />
      <WorshipExperienceSection showButton />
      <TestimoniesSection />
      <DownloadAppSection />
    </AppLayout>
  );
};

export default ResourcesPage;
