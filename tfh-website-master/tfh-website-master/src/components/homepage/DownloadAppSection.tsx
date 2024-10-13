import React from 'react';
import DownloadImage from '@/assets/images/home/app-download.webp';
import Image from 'next/image';
import PlayStore from '@/common/AppButtons/PlayStore';
import GooglePlay from '@/assets/svgs/app/google-play-big.svg';

const DownloadAppSection = () => {
  return (
    <section
      id='download'
      className='download-bg flex lg:items-start items-end justify-end flex-wrap lg:flex-nowrap relative'
    >
      <div className='lg:flex-[50%] flex flex-col px-primary lg:py-[162px] py-[100px]'>
        <h2 className='text-white font-secondary text-[40px] lg:text-[55px] font-bold mb-[27px]'>
          <span className='font-normal text-[51px] lg:text-[64px] text-warning font-cursive'>
            Download
          </span>{' '}
          worship atmosphere House Church Mobile App
        </h2>
        <p className='text-white text-md lg:text-xl font-normal mb-[64px] lg:md-[74px]'>
          With the worship atmosphere;s House Mobile App, you can access the church on the go.
          Have access to daily devotional, church events, announcement and even stream
          services online and listen to the church&apos;s podcast on the go. All in one
          place!
        </p>
        <p className='text-warning font-bold text-xl lg:text-2xl mb-[17px]'>
          NOW AVAILABLE ON
        </p>
        <PlayStore image={GooglePlay} />
      </div>
      <div className='lg:flex-[50%] justify-end hidden self-end xl:flex'>
        <Image src={DownloadImage} alt='' />
      </div>
    </section>
  );
};

export default DownloadAppSection;
