import AppLayout from '@/components/layout/AppLayout';
import Header from '@/components/messagesPage/Header';
import LatestMessage from '@/components/messagesPage/LatestMessage';
import MessagesList from '@/components/messagesPage/MessagesList';
import { YOUTUBE_API_KEY, YOUTUBE_UPLOAD_KEY } from '@/functions/environmentVariables';
import { sendCatchFeedback } from '@/functions/feedback';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setVideoLoading, setVideos } from '@/store/slices/youtubeVideos';
import axios from 'axios';
import React, { useEffect } from 'react';

const MessagesPage = () => {
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
      <LatestMessage />
      <MessagesList />
    </AppLayout>
  );
};

export default MessagesPage;
