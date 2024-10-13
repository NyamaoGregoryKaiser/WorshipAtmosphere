import EventDescription from '@/components/eventPage/EventDescription';
import Header from '@/components/eventPage/Header';
import AppLayout from '@/components/layout/AppLayout';
import React from 'react';

const EventDescriptionPage = () => {
  return (
    <AppLayout>
      <Header />
      <EventDescription />
    </AppLayout>
  );
};

export default EventDescriptionPage;
