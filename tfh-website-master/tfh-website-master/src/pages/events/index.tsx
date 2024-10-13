import EventList from '@/components/eventPage/EventList';
import Header from '@/components/eventPage/Header';
import AppLayout from '@/components/layout/AppLayout';
import React from 'react';

const EventsPage = () => {
  return (
    <AppLayout>
      <Header />
      <EventList />
    </AppLayout>
  );
};

export default EventsPage;
