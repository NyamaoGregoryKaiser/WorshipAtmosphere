import DevotionalDescription from '@/components/devotional/DevotionalDescription';
import Header from '@/components/devotional/Header';
import AppLayout from '@/components/layout/AppLayout';
import React from 'react';

const SingleDevotionalPage = () => {
  return (
    <AppLayout>
      <Header />
      <DevotionalDescription />
    </AppLayout>
  );
};

export default SingleDevotionalPage;
