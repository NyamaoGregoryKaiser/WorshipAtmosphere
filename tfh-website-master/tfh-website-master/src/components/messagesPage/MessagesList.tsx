import Image from 'next/image';
import React, { useRef, useState } from 'react';
import PlayIcon from '@/assets/svgs/home/play-icon.svg';
import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator';
import { getYoutubeLink } from '@/functions/stringManipulations';
import { sendCatchFeedback } from '@/functions/feedback';
import axios from 'axios';
import { YOUTUBE_API_KEY, YOUTUBE_UPLOAD_KEY } from '@/functions/environmentVariables';
import { YoutubeVideoType } from '@/types/types';
import YoutubePagination from '@/common/YoutubePagination';

const MessagesList = () => {
  const [page, setPage] = React.useState(1);
  const sectionRef = useRef<null | HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [pageToken, setPageToken] = useState('');
  const [prevPageToken, setPrevPageToken] = useState('');
  const [nextPageToken, setNextPageToken] = useState('');
  const [videos, setVideos] = useState<YoutubeVideoType[] | undefined>(undefined);

  const getYoutubeChannelVideos = async () => {
    sectionRef.current?.scrollIntoView();

    try {
      setLoading(true);
      let response;
      if (pageToken) {
        response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&part=snippet&playlistId=${YOUTUBE_UPLOAD_KEY}&maxResults=10&pageToken=${pageToken}`
        );
      } else {
        response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&part=snippet&playlistId=${YOUTUBE_UPLOAD_KEY}&maxResults=10`
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

  return (
    <section
      id='messages-list'
      className='px-primary pb-[93px] !scroll-smooth'
      ref={sectionRef}
    >
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px]  mb-[30px]'>
        Recent Messages
      </h2>
      <div className='gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        {loading ? (
          <LoadingIndicator />
        ) : videos && videos.length > 0 ? (
          videos.map((video) => (
            <div
              key={video.id}
              className='flex flex-col gap-[17px] text-center md:text-left  w-full '
            >
              <a
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${
                    video.snippet.thumbnails.standard?.url ||
                    video.snippet.thumbnails.default?.url
                  })`,
                }}
                href={getYoutubeLink(video.snippet.resourceId.videoId)}
                target='_blank'
                className='flex items-center justify-center w-full h-[316px] max-h-screen group bg-center bg-no-repeat bg-cover rounded-[20px]'
              >
                <Image
                  src={PlayIcon}
                  alt='Play'
                  className='group-hover:sepia duration-300'
                  width={95}
                  height={95}
                />
              </a>
              <div className=''>
                <p className='text-lg lg:text-[22px] font-bold text-primary mb-2 truncate'>
                  {video.snippet.title}
                </p>
                <p className='lg:text-xl font-medium'>
                  {new Date(video.snippet.publishedAt).toDateString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No video found</p>
        )}
      </div>
      <YoutubePagination
        page={page}
        setPage={setPage}
        nextPageToken={nextPageToken}
        setPageToken={setPageToken}
        prevPageToken={prevPageToken}
      />
    </section>
  );
};

export default MessagesList;
