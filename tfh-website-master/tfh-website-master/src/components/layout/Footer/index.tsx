import React from 'react';
import ContactSection from './ContactSection';
import CopyrightSection from './CopyrightSection';
import LinkSection from './LinkSection';
import LogoSection from './LogoSection';

function Footer() {
  return (
    <footer>
      <div className='bg-black pt-[89px]'>
        <div className='grid lg:grid-cols-3 lg:gap-[6vw] gap-[60px] md:grid-cols-2 grid-cols-1 pr-primary pl-primary'>
          <LogoSection />
          <LinkSection />
          <ContactSection />
        </div>
        <CopyrightSection />
      </div>
    </footer>
  );
}

export default Footer;
