import AppLayout from '@/components/layout/AppLayout';
import Header from '@/components/locations/Header';
import LocationsList from '@/components/locations/LocationsList';
import React from 'react';

const ChurchLocations = () => {
  return (
    <AppLayout>
      <Header />
      <LocationsList />
    </AppLayout>
  );
};

export default ChurchLocations;
