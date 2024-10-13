import ChurchLocationSection from '@/components/contactPage/ChurchLocationSection';
import ContactLinks from '@/components/contactPage/ContactLinks';
import Header from '@/components/contactPage/Header';
import SocialLinkSection from '@/components/contactPage/SocialLinkSection';
import AppLayout from '@/components/layout/AppLayout';
import React from 'react';

const ContactPage = () => {
  return (
    <AppLayout>
      <Header />
      <div className='px-primary py-[100px]'>
        <SocialLinkSection />
        <ContactLinks />
        <ChurchLocationSection />
      </div>
    </AppLayout>
  );
};

export default ContactPage;
