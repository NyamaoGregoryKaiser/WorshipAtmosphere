import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator';
import { getYoutubeLink } from '@/functions/stringManipulations';
import { useAppSelector } from '@/store/hooks';
import Image from 'next/image';
import React from 'react';
import PlayIcon from '@/assets/svgs/home/play-icon.svg';

const LatestMessage = () => {
  const { videos, loading } = useAppSelector((state) => state.youtubeVideos);

  return (
    <section id='worship' className='px-primary py-[93px] mb-[78px]'>
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary  mb-[54px]'>
        Our Last Service
      </h2>
      {loading ? (
        <LoadingIndicator />
      ) : videos && videos.length > 0 ? (
        <a href={getYoutubeLink(videos[0].snippet.resourceId.videoId)} target='_blank'>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${videos[0].snippet.thumbnails.standard?.url})`,
            }}
            className='flex items-center justify-center w-full h-[316px] lg:h-[640px] max-h-screen group bg-center bg-no-repeat bg-cover rounded-[40px]'
          >
            <Image
              src={PlayIcon}
              alt='Play'
              className='group-hover:sepia duration-300 h-[98px] w-[98px] lg:h-auto lg:w-auto'
            />
          </div>
          <div className='flex items-center gap-5 flex-wrap flex-col md:flex-row justify-between text-center md:text-left mt-6 mb-5'>
            <p className='text-primary font-secondary font-bold text-2xl md:text-[32px] lg:text-[40px]'>
              {videos[0].snippet.title}
            </p>
            <span className='md:text-xl lg:text-2xl'>
              {new Date(videos[0].snippet.publishedAt).toDateString()}
            </span>
          </div>
          <p className='font-normal md:text-xl lg:text-2xl line-clamp-2'>
            {videos[0].snippet.description}
          </p>
        </a>
      ) : (
        <span>No video found</span>
      )}
    </section>
  );
};

export default LatestMessage;
