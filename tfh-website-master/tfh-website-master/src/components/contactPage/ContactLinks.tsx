import React from 'react';
import contactPageLinks from './contactPageLinks';
import Link from 'next/link';

const ContactLinks = () => {
  return (
    <div className='flex flex-col gap-9 w-full items-center mt-[85px]'>
      {contactPageLinks.map((item) => (
        <Link
          key={item.label}
          href={item.link}
          className='md:w-[80%] w-full text-white bg-secondary md:text-xl lg:text-2xl flex items-center justify-center p-8 rounded-[5px]'
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default ContactLinks;
