import AppLayout from '@/components/layout/AppLayout';
import Header from '@/components/podcastPage/Header';
import PodcastChannels from '@/components/podcastPage/PodcastChannels';
import React from 'react';

const PodcastPage = () => {
  return (
    <AppLayout>
      <Header />
      <div className='px-primary py-[100px]'>
        <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary mb-[66px]'>
          Our Podcast Channels
        </h2>
        <PodcastChannels />
      </div>
    </AppLayout>
  );
};

export default PodcastPage;
