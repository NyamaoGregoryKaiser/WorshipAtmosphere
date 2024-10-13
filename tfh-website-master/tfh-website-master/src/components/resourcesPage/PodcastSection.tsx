import React from 'react';
import podcastImage from '@/assets/images/resources/podcast.svg';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/common/Button';

const PodcastSection = () => {
  return (
    <section
      id='podcast'
      className='podcast-bg px-primary py-[100px] flex items-center md:items-start flex-col md:flex-row md:gap-[17px]'
    >
      <div>
        <Image src={podcastImage} alt='people in church' />
      </div>
      <div className='mt-[36px]'>
        <h2 className='text-white text-[35px] md:text-[48px] lg:text-[60px] font-bold mb-6 text-center md:text-left'>
          Listen to our podcasts
        </h2>
        <p className='text-white font-normal md:text-xl max-w-[672px] mb-9 text-center md:text-left'>
          “If you declare with your mouth, “Jesus is Lord,” and believe in your heart that
          God raised him from the dead, you will be saved. For it is with your heart that
          you believe and are justified, and it is with your mouth that you profess your
          faith and are saved.”
        </p>
        <Link href='/podcast'>
          <Button className='!w-[280px] !max-w-full !bg-white !text-secondary'>
            Listen to Podcasts
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PodcastSection;
