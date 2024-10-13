import AboutHeader from '@/components/aboutPage/AboutHeader';
import HistorySection from '@/components/aboutPage/HistorySection';
import PastorsSection from '@/components/aboutPage/PastorsSection';
import StatementOfFaithSection from '@/components/aboutPage/StatementOfFaithSection';
import VisionSection from '@/components/aboutPage/VisionSection';
import DirectionSection from '@/components/homepage/DirectionSection';
import SubscribeSection from '@/components/homepage/SubscribeSection';
import AppLayout from '@/components/layout/AppLayout';
import React from 'react';

function About() {
  return (
    <AppLayout>
      <AboutHeader />
      <HistorySection />
      <VisionSection />
      <StatementOfFaithSection />
      <PastorsSection />
    </AppLayout>
  );
}

export default About;
