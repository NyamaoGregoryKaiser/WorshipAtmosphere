import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator';
import { useAppSelector } from '@/store/hooks';
import React from 'react';
import PlayIcon from '@/assets/svgs/home/play-icon.svg';
import Image from 'next/image';
import { getYoutubeLink } from '@/functions/stringManipulations';

const WorshipSection = () => {
  const { videos, loading } = useAppSelector((state) => state.youtubeVideos);

  return (
    <section id='worship' className='message-bg px-primary py-[93px]'>
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary  mb-[11px]'>
        Our Last Worship Experience
      </h2>
      {loading ? (
        <LoadingIndicator />
      ) : videos && videos.length > 0 ? (
        <>
          <p className='text-lg lg:text-2xl text-center font-medium mb-[56px]'>
            In God's Presence on {new Date(videos[0].snippet.publishedAt).toDateString()}
          </p>
          <a
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${videos[0].snippet.thumbnails.standard?.url})`,
            }}
            href={getYoutubeLink(videos[0].snippet.resourceId.videoId)}
            target='_blank'
            className='flex items-center justify-center w-full h-[316px] lg:h-[640px] max-h-screen group bg-center bg-no-repeat bg-cover rounded-[40px]'
          >
            <Image
              src={PlayIcon}
              alt='Play'
              className='group-hover:sepia duration-300 h-[98px] w-[98px] lg:h-auto lg:w-auto'
            />
          </a>
        </>
      ) : (
        <span>No video found</span>
      )}
    </section>
  );
};

export default WorshipSection;
