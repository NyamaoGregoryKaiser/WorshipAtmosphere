import React from 'react';
import { streamingChannels } from './data';
import Image from 'next/image';

const LivestreamChannelsSection = () => {
  return (
    <section id='livestream-channels' className='px-primary pt-[100px]'>
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary  mb-[23px]'>
        Other Livestream Channels
      </h2>
      <p className='text-lg lg:text-2xl text-center font-medium mb-[83px]'>
        Select the channel you want to stream from.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-11 w-full'>
        {streamingChannels.map((channel) => (
          <a
            key={channel.link}
            className='flex items-center justify-center w-full rounded-[10px] p-7 shadow-md bg-white'
            href={channel.link}
            target='_blank'
          >
            <Image src={channel.image} alt='streaming platform' />
          </a>
        ))}
      </div>
    </section>
  );
};

export default LivestreamChannelsSection;
