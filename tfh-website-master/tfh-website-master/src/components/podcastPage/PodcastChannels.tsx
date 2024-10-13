import React from 'react';
import podcastLinks from './podcastLinks';
import Image from 'next/image';

const PodcastChannels = () => {
  return (
    <div className='flex flex-col gap-[30px] w-full items-center'>
      {podcastLinks.map((podcast) => (
        <a
          key={podcast.link}
          href={podcast.link}
          target='_blank'
          className='md:w-[70%] w-full bg-white p-5 rounded-md shadow flex items-center justify-center'
        >
          <Image src={podcast.icon} className='object-contain' alt='podcast' />
        </a>
      ))}
    </div>
  );
};

export default PodcastChannels;
