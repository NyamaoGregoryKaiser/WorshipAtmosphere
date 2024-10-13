import DevotionalList from '@/components/devotional/DevotionalList';
import Header from '@/components/devotional/Header';
import AppLayout from '@/components/layout/AppLayout';
import React from 'react';

const DevotionalsPage = () => {
  return (
    <AppLayout>
      <Header />
      <DevotionalList />
    </AppLayout>
  );
};

export default DevotionalsPage;
