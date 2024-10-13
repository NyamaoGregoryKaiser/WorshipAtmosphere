import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Image from 'next/image';
import React, { useEffect } from 'react';
import CancelIcon from '@/assets/svgs/layout/cancel.svg';
import PlayStoreIcon from '@/assets/svgs/layout/play-store.svg';
import { closeMobileBar, openMobileBar } from '@/store/slices/mobileBar';
import { localStorageVariables } from '@/functions/variables';

function MobileDownloadBar() {
  const { open } = useAppSelector((state) => state.mobileBar);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // NextJS doesn't recognize local storage on render because its server side rendering
    const open =
      typeof window !== 'undefined'
        ? localStorage.getItem(localStorageVariables.hideMobileBar)
          ? false
          : true
        : false;

    if (open) {
      dispatch(openMobileBar());
    }
  }, []);

  if (!open) return null;

  return (
    <div className='bg-[#F6F6F6] flex justify-center items-center flex-wrap w-full h-12 relative'>
      <div className='flex items-center gap-6 text-[11px] text-[#6F6F6F]'>
        <span className='font-bold text-xl hidden md:block'>
          Download our Mobile App today!
        </span>
        <a
          className='flex items-center gap-[9px] bg-[#E2E2E2] w-fit p-2
        rounded-sm h-[29.79px] justify-center hover:brightness-90 duration-300'
          href='https://play.google.com/store/apps/details?id=com.tfhmobile'
          target='_blank'
          rel='noreferrer'
        >
          <Image src={PlayStoreIcon} alt='Play Store' />
          <span className='hidden md:block'>PlayStore</span>
          <span className='md:hidden'>Download from PlayStore</span>
        </a>
      </div>
      <button
        className='w-[26.91px] h-[26.91px] bg-[#D9D9D9] rounded-full absolute md:right-16 right-5
       flex items-center justify-center hover:brightness-90 duration-300'
        onClick={() => dispatch(closeMobileBar())}
      >
        <Image src={CancelIcon} alt='Close' />
      </button>
    </div>
  );
}

export default MobileDownloadBar;
