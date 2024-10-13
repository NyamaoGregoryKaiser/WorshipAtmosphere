import React from 'react';
import AppLayout from '../layout/AppLayout';
import Image from 'next/image';
import BrandImage from '@/assets/brand/logo1.png';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppLayout>
      <div className='px-primary py-[100px] auth-header-bg w-full flex items-center flex-col '>
        <Image src={BrandImage} alt='logo' className='mb-[53px] object-contain' />
        <div className='md:max-w-[50%] flex flex-col items-center w-full'>{children}</div>
      </div>
    </AppLayout>
  );
};

export default AuthLayout;
