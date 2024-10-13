import Header from '@/components/givingPage/Header';
import OfflineChannels from '@/components/givingPage/OfflineChannels';
import AppLayout from '@/components/layout/AppLayout';
import React from 'react';

const GivingPage = () => {
  return (
    <AppLayout>
      <Header />
      <div className='giving-bg'>
        <OfflineChannels />
      </div>
    </AppLayout>
  );
};

export default GivingPage;
