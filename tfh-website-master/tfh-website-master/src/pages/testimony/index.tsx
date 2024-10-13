import AppLayout from '@/components/layout/AppLayout';
import Header from '@/components/testimony/Header';
import ShareTestimony from '@/components/testimony/ShareTestimony';
import TestimonyList from '@/components/testimony/TestimonyList';
import React from 'react';

const TestimonyPage = () => {
  return (
    <AppLayout>
      <Header />
      <div className='py-[100px] px-primary'>
        <ShareTestimony />
        <TestimonyList />
        <ShareTestimony />
      </div>
    </AppLayout>
  );
};

export default TestimonyPage;
